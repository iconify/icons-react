import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhprvbkhh.css';
import '../../css/i/ihvftj6_d.css';
import '../../css/f/fgs3gl2sz.css';
import '../../css/j/jiax3zkxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uhprvbkhh"/><path clip-rule="evenodd" class="ihvftj6_d"/><path class="fgs3gl2sz"/><path clip-rule="evenodd" class="jiax3zkxt"/></g>`,
		"fallback": "healthicons:respirator2x-outline",
	});
}

export default Component;
