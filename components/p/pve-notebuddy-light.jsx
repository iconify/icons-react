import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1aoolbul.css';
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
		"content": `<path class="b1aoolbul"/><linearGradient id="SVGOrt0keYM" x1="197.808" x2="313.942" y1="197.22" y2="314.528" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGOrt0keYM)" class="muk_sco2e"/>`,
		"fallback": "selfhst:pve-notebuddy-light",
	});
}

export default Component;
