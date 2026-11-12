import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_omjrbrf.css';
import '../../css/q/qkjgixexb.css';
import '../../css/i/ibe8-fbnh.css';
import '../../css/x/xdm43czpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGmQaenbuV" x1="110.4" x2="401.6" y1="3.7" y2="508.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="b_omjrbrf"/><stop offset="1" class="qkjgixexb"/></linearGradient><path fill="url(#SVGmQaenbuV)" class="ibe8-fbnh"/><path class="xdm43czpa"/>`,
		"fallback": "selfhst:littlelink",
	});
}

export default Component;
