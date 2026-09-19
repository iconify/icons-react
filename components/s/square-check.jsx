import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/g/gk5rm9btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u4sxwwy9k"/><path class="gk5rm9btw"/></g>`,
		"fallback": "hugeicons:square-check",
	});
}

export default Component;
