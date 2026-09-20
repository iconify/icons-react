import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hca6g4gme.css';
import '../../css/m/mtjf1dn9k.css';
import '../../css/k/ksw0hwbel.css';
import '../../css/u/u_znmv-9h.css';
import '../../css/w/whp-25b7f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hca6g4gme"/><path class="mtjf1dn9k"/><path class="ksw0hwbel"/><path clip-rule="evenodd" class="u_znmv-9h"/><path class="whp-25b7f"/>`,
		"fallback": "openmoji:markdown",
	});
}

export default Component;
