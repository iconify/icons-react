import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ag-hqvn.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/m/muk_sco2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ag-hqvn"/><linearGradient id="SVGhnntzbDF" x1="197.8" x2="313.9" y1="197.2" y2="314.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGhnntzbDF)" class="muk_sco2e"/>`,
		"fallback": "selfhst:pve-notebuddy-dark",
	});
}

export default Component;
