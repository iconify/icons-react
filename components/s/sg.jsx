import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cugdnbcke.css';
import '../../css/g/gs6fbxbjv.css';
import '../../css/y/y-hsrvr4b.css';
import '../../css/x/xz-gtfvsb.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cugdnbcke"/><path class="gs6fbxbjv"/><path class="y-hsrvr4b"/><path class="xz-gtfvsb"/></g>`,
		"fallback": "cif:sg",
	});
}

export default Component;
