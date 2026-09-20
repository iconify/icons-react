import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9_mk0t0o.css';
import '../../css/a/aynyspbri.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfEGBUcgw"><g class="ft5dv1b6b"><path class="y9_mk0t0o"/><path class="aynyspbri"/></g></mask></defs><path mask="url(#SVGfEGBUcgw)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:navigate-duotone-line",
	});
}

export default Component;
