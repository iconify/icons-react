import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ule40toop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ule40toop"/>`,
		"fallback": "coolicons:ungroup-fill-round",
	});
}

export default Component;
