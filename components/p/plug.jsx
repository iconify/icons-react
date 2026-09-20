import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2gl3acpc.css';
import '../../css/x/xc0yxgbay.css';
import '../../css/u/udt3hqb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2gl3acpc"/><path clip-rule="evenodd" class="xc0yxgbay"/><path class="udt3hqb4c"/></g>`,
		"fallback": "reicon:plug",
	});
}

export default Component;
