import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/r/rpsfcsbix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGz73Snc6e" x1="-423.973" x2="-301.184" y1="670.216" y2="547.427" gradientTransform="matrix(2.8346 0 0 -2.8346 1290.117 1975.458)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGz73Snc6e)" class="rpsfcsbix"/>`,
		"fallback": "selfhst:jellify-light",
	});
}

export default Component;
