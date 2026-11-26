import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o33waxbmm.css';
import '../../css/g/g4v3c6bdw.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/v/vhfy_qvaw.css';
import '../../css/n/nk138_b6c.css';
import '../../css/y/yuwyb1bhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGK3LvkcMy" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="o33waxbmm"/><stop offset=".85" class="g4v3c6bdw"/><stop offset="1" class="g4v3c6bdw"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGK3LvkcMy)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="vhfy_qvaw"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`,
		"fallback": "xero-emoji:orange-circle",
	});
}

export default Component;
