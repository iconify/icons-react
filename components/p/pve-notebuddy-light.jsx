import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj_3qbben.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/m/muk_sco2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj_3qbben"/><linearGradient id="SVGf7kZMe2C" x1="197.8" x2="313.9" y1="197.2" y2="314.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGf7kZMe2C)" class="muk_sco2e"/>`,
		"fallback": "selfhst:pve-notebuddy-light",
	});
}

export default Component;
