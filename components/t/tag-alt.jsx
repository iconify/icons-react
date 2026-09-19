import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfcy-yz4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfcy-yz4w"/>`,
		"fallback": "boxicons:tag-alt",
	});
}

export default Component;
