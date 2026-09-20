import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wifo-cb2s.css';
import '../../css/w/wqp-bwb_c.css';
import '../../css/d/dm_mfnb3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGwONFndEi" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="wifo-cb2s"/><stop offset="1" class="wqp-bwb_c"/></linearGradient><path fill="url(#SVGwONFndEi)" class="dm_mfnb3o"/>`,
		"fallback": "selfhst:microsandbox",
	});
}

export default Component;
