import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4jryvres.css';
import '../../css/r/rw5c_lizo.css';
import '../../css/y/yw8ns2ibw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4jryvres"/><linearGradient id="SVGEsmpMgIR" x1="395.32" x2="263.097" y1="89.142" y2="479.761" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="rw5c_lizo"/></linearGradient><path fill="url(#SVGEsmpMgIR)" class="yw8ns2ibw"/>`,
		"fallback": "selfhst:microsoft-azure-dark",
	});
}

export default Component;
