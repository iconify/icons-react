import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhdm-4kfi.css';
import '../../css/f/f70d4ftpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhdm-4kfi"/><path class="f70d4ftpp"/></g>`,
		"fallback": "bi:keyboard",
	});
}

export default Component;
