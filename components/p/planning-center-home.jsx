import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxg55wcez.css';
import '../../css/r/r819d5bvv.css';
import '../../css/w/w3a302kie.css';
import '../../css/s/s585m_b3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGEayy58rm" x1="12.469" x2="1432.842" y1="366.805" y2="-1054.123" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wxg55wcez"/><stop offset="1" class="r819d5bvv"/></linearGradient><path fill="url(#SVGEayy58rm)" class="w3a302kie"/><path class="s585m_b3o"/>`,
		"fallback": "selfhst:planning-center-home",
	});
}

export default Component;
