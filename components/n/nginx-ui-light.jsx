import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tfdkf_i9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGKO1Psbma" cx="260.444" cy="455.503" r="843.338" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset=".34" class="vc--wpv5i"/></radialGradient><path fill="url(#SVGKO1Psbma)" class="tfdkf_i9r"/>`,
		"fallback": "selfhst:nginx-ui-light",
	});
}

export default Component;
