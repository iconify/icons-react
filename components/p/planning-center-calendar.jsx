import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trbz02ocy.css';
import '../../css/w/wnkvud7ko.css';
import '../../css/f/fesr6pspg.css';
import '../../css/t/t2-qfwbnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG6HfdAdsm" x1="201.523" x2="1225.504" y1="177.485" y2="-846.496" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="trbz02ocy"/><stop offset="1" class="wnkvud7ko"/></linearGradient><path fill="url(#SVG6HfdAdsm)" class="fesr6pspg"/><path class="t2-qfwbnh"/>`,
		"fallback": "selfhst:planning-center-calendar",
	});
}

export default Component;
