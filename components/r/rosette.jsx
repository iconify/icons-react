import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpq5rccwk.css';
import '../../css/l/l708xcmej.css';
import '../../css/s/szj_d6j1z.css';
import '../../css/v/v3s-chjxr.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/m/mt5cumbpy.css';
import '../../css/o/opz55kb1u.css';
import '../../css/t/tttw7cbdo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpq5rccwk"/><path class="l708xcmej"/><circle class="szj_d6j1z"/><circle class="v3s-chjxr"/><g class="kdz4acc8r"><path class="mt5cumbpy"/><circle class="opz55kb1u"/><circle class="tttw7cbdo"/></g>`,
		"fallback": "openmoji:rosette",
	});
}

export default Component;
