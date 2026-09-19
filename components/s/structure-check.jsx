import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eqfieabcg.css';
import '../../css/f/ff22j4bof.css';
import '../../css/m/mcl7h3lrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eqfieabcg"/><path class="ff22j4bof"/><path class="mcl7h3lrd"/></g>`,
		"fallback": "hugeicons:structure-check",
	});
}

export default Component;
