import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkqhgpe2h.css';
import '../../css/w/wz00z2k7d.css';
import '../../css/i/iycln-b8i.css';
import '../../css/x/xveap1bta.css';
import '../../css/n/nooc1-b8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGZVEzHbdW" x1="-701.035" x2="-701.035" y1="796.444" y2="795.377" gradientTransform="matrix(480 0 0 -480 336753 382293)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qkqhgpe2h"/><stop offset="1" class="wz00z2k7d"/></linearGradient><circle fill="url(#SVGZVEzHbdW)" class="iycln-b8i"/><path class="xveap1bta"/><path class="nooc1-b8a"/>`,
		"fallback": "selfhst:priceghost",
	});
}

export default Component;
