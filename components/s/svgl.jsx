import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_hswibar.css';
import '../../css/c/ci61avbfu.css';
import '../../css/s/sbhzribxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVGvdp9QbRA)" paint-order="stroke" class="i_hswibar"/><defs><radialGradient id="SVGvdp9QbRA" cx="50%" cy="50%" r="100%" fx="50%" fy="0%" gradientUnits="objectBoundingBox"><stop class="ci61avbfu"/><stop offset="1"/></radialGradient></defs><path class="sbhzribxd"/></g>`,
		"fallback": "thesvg-color:svgl",
	});
}

export default Component;
