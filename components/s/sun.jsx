import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfjyc5uqq.css';
import '../../css/f/fpgp4bcql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vfjyc5uqq"/><path class="fpgp4bcql"/></g>`,
		"fallback": "at-icons:sun",
	});
}

export default Component;
