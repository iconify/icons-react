import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4bv54bda.css';
import '../../css/c/cadmicbek.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/l5ogfet2l.css';
import '../../css/i/i1_e63bbi.css';
import '../../css/m/ms7eqebfn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4bv54bda"/><path class="cadmicbek"/><g class="jn8qy4bru"><path class="l5ogfet2l"/><path class="i1_e63bbi"/><path class="ms7eqebfn"/></g>`,
		"fallback": "openmoji:medical-gloves",
	});
}

export default Component;
