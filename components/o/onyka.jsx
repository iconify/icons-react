import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt82f1bfu.css';
import '../../css/g/gpel3lais.css';
import '../../css/u/uw6o-yb3z.css';
import '../../css/u/utvvupbkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVG8SCVwbms" cx="112.324" cy="536.785" r="1.331" gradientTransform="matrix(0 228.342 228.342 0 -122314.648 -25440.303)" gradientUnits="userSpaceOnUse"><stop offset="0" class="lt82f1bfu"/><stop offset=".55" class="gpel3lais"/><stop offset="1" class="uw6o-yb3z"/></radialGradient><path fill="url(#SVG8SCVwbms)" class="utvvupbkr"/>`,
		"fallback": "selfhst:onyka",
	});
}

export default Component;
