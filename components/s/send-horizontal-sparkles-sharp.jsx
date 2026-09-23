import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/znmg3kb4h.css';
import '../../css/j/jhdcgbc5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="znmg3kb4h"/><path class="jhdcgbc5c"/></g>`,
		"fallback": "keyline-icons:send-horizontal-sparkles-sharp",
	});
}

export default Component;
