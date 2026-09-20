import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/s/s0urbhscb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/utvvupbkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVG1f7iscIR" cx="112.324" cy="536.785" r="1.331" gradientTransform="matrix(0 228.342 228.342 0 -122314.648 -25440.303)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".421" class="s0urbhscb"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVG1f7iscIR)" class="utvvupbkr"/>`,
		"fallback": "selfhst:onyka-light",
	});
}

export default Component;
