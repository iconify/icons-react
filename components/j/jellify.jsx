import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfwnkk0kz.css';
import '../../css/u/u4rnc5uqo.css';
import '../../css/r/rpsfcsbix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG4fXLAdZl" x1="-423.973" x2="-301.184" y1="670.216" y2="547.427" gradientTransform="matrix(2.8346 0 0 -2.8346 1290.12 1975.46)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qfwnkk0kz"/><stop offset="1" class="u4rnc5uqo"/></linearGradient><path fill="url(#SVG4fXLAdZl)" class="rpsfcsbix"/>`,
		"fallback": "selfhst:jellify",
	});
}

export default Component;
