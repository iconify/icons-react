import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_my74bgw.css';
import '../../css/n/ndrh4tbdr.css';
import '../../css/u/u86j14b4w.css';
import '../../css/k/k102r7byu.css';
import '../../css/s/spa1hx5jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_my74bgw"/><path class="ndrh4tbdr"/><path class="u86j14b4w"/><path class="k102r7byu"/><path class="spa1hx5jy"/></g>`,
		"fallback": "solar:sidebar-code-bold-duotone",
	});
}

export default Component;
