import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqk8mibcy.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/i/isv5yaccv.css';
import '../../css/h/hcjkp5b_u.css';
import '../../css/b/b2g_cjgkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGhaZLmoMK" x1="469.999" x2="-563.675" y1="97.76" y2="905.989" gradientTransform="matrix(1 0 0 -1 10.48 529.28)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset=".938" class="vc--wpv5i"/><stop offset="1" class="isv5yaccv"/></linearGradient><path fill="url(#SVGhaZLmoMK)" vector-effect="non-scaling-stroke" class="hcjkp5b_u"/><path class="b2g_cjgkw"/>`,
		"fallback": "selfhst:maintainerr",
	});
}

export default Component;
