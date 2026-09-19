import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iab0z3b6s.css';
import '../../css/y/y9ho91v3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iab0z3b6s"/><path class="y9ho91v3n"/></g>`,
		"fallback": "iconoir:pharmacy-cross-tag",
	});
}

export default Component;
