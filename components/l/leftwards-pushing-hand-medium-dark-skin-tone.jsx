import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_09uzbol.css';
import '../../css/r/reipi0w6l.css';
import '../../css/u/u9ld25bjz.css';
import '../../css/q/qtvivvozr.css';
import '../../css/s/suavi9osi.css';
import '../../css/o/o69beaclm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_09uzbol"/><path class="reipi0w6l"/><path class="u9ld25bjz"/><g class="qtvivvozr"><path class="suavi9osi"/><path class="o69beaclm"/></g>`,
		"fallback": "openmoji:leftwards-pushing-hand-medium-dark-skin-tone",
	});
}

export default Component;
