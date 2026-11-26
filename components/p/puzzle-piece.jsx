import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cab4bgbam.css';
import '../../css/a/aqw-tla1r.css';
import '../../css/k/klrco5bch.css';
import '../../css/d/d9hohlwtt.css';
import '../../css/r/rkw8p7bxf.css';
import '../../css/f/ff4827s8e.css';
import '../../css/j/jk-1gw3je.css';
import '../../css/v/v5_r5otyw.css';
import '../../css/n/nuj-csbof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGFGhmwehr" cx="89.7" cy="74.2" r="110.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="cab4bgbam"/><stop offset=".85" class="aqw-tla1r"/><stop offset="1" class="aqw-tla1r"/></radialGradient><radialGradient id="SVGvf5j5OAS" cx="89.7" cy="74.2" r="110.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="klrco5bch"/><stop offset=".85" class="d9hohlwtt"/><stop offset="1" class="d9hohlwtt"/></radialGradient></defs><path class="rkw8p7bxf"/><path fill="url(#SVGFGhmwehr)" transform="matrix(3 0 0 3 -65.255 -37.697)" class="ff4827s8e"/><path class="jk-1gw3je"/><path fill="url(#SVGvf5j5OAS)" transform="matrix(3 0 0 3 -83.461 -61.971)" class="ff4827s8e"/><path class="v5_r5otyw"/><path class="nuj-csbof"/>`,
		"fallback": "xero-emoji:puzzle-piece",
	});
}

export default Component;
