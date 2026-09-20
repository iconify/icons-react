import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/r/r2rl9cbwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGpZrfYbPV" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGpZrfYbPV)" class="r2rl9cbwe"/>`,
		"fallback": "selfhst:wastebin-light",
	});
}

export default Component;
