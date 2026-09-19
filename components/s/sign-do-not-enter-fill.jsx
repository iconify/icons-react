import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcq8pzrle.css';
import '../../css/y/ydi-uebvi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcq8pzrle"/><path class="ydi-uebvi"/></g>`,
		"fallback": "bi:sign-do-not-enter-fill",
	});
}

export default Component;
