import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqz7flb0x.css';
import '../../css/t/t245-n7sy.css';
import '../../css/f/fmy343bps.css';
import '../../css/t/twzrj5eht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGcy95AgrO" x1="189.056" x2="296.848" y1="470.428" y2="659.063" gradientTransform="translate(0 -278.024)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vqz7flb0x"/><stop offset="1" class="t245-n7sy"/></linearGradient><path fill="url(#SVGcy95AgrO)" class="fmy343bps"/><linearGradient id="SVGjYVYSdaH" x1="130.554" x2="241.634" y1="266.456" y2="460.846" gradientTransform="translate(0 -278.024)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vqz7flb0x"/><stop offset="1" class="t245-n7sy"/></linearGradient><path fill="url(#SVGjYVYSdaH)" class="twzrj5eht"/>`,
		"fallback": "selfhst:plausible",
	});
}

export default Component;
