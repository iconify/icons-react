import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o33waxbmm.css';
import '../../css/g/g4v3c6bdw.css';
import '../../css/o/o0er8obme.css';
import '../../css/a/aa_di1bap.css';
import '../../css/n/nx-zif_kx.css';
import '../../css/o/oe_c2ivtr.css';
import '../../css/h/h7w6h8b8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGVd37yc2X" cx="87.5" cy="82.1" r="71.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="o33waxbmm"/><stop offset=".85" class="g4v3c6bdw"/><stop offset="1" class="g4v3c6bdw"/></radialGradient></defs><path class="o0er8obme"/><path fill="url(#SVGVd37yc2X)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="aa_di1bap"/><path class="nx-zif_kx"/><path class="oe_c2ivtr"/><path class="h7w6h8b8u"/>`,
		"fallback": "xero-emoji:small-orange-diamond",
	});
}

export default Component;
