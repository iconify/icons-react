import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhba2ub5t.css';
import '../../css/u/ugsybrb1j.css';
import '../../css/t/tfdkf_i9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGfBJ1bekV" cx="260.444" cy="455.503" r="843.338" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xhba2ub5t"/><stop offset=".34" class="ugsybrb1j"/></radialGradient><path fill="url(#SVGfBJ1bekV)" class="tfdkf_i9r"/>`,
		"fallback": "selfhst:nginx-ui",
	});
}

export default Component;
