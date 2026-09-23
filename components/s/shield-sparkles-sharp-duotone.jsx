import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i43jttb1d.css';
import '../../css/k/ksu4hvb6k.css';
import '../../css/o/ovikvmgdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i43jttb1d"/><path class="ksu4hvb6k"/><path class="ovikvmgdf"/></g>`,
		"fallback": "keyline-icons:shield-sparkles-sharp-duotone",
	});
}

export default Component;
