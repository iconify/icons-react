import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yrcm1ibvg.css';
import '../../css/m/mus5l3b9c.css';
import '../../css/y/y9_9cbcfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yrcm1ibvg"/><path class="mus5l3b9c"/><path class="y9_9cbcfr"/></g>`,
		"fallback": "keyline-icons:wand-sparkles-sharp-duotone",
	});
}

export default Component;
