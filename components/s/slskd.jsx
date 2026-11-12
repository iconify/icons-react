import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njy-ywcwy.css';
import '../../css/l/l_shvbb8k.css';
import '../../css/g/gkcr4nuis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGDxufMddq" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="njy-ywcwy"/><stop offset="1" class="l_shvbb8k"/></linearGradient><path fill="url(#SVGDxufMddq)" class="gkcr4nuis"/>`,
		"fallback": "selfhst:slskd",
	});
}

export default Component;
