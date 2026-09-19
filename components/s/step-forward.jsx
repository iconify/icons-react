import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0_u48bns.css';

const viewBox = {"width":1024,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1024 0) scale(-1 1)"><path class="u0_u48bns"/></g>`,
		"fallback": "fa:step-forward",
	});
}

export default Component;
