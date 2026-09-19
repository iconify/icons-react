import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb6lg-b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb6lg-b7w"/>`,
		"fallback": "gridicons:rotate",
	});
}

export default Component;
