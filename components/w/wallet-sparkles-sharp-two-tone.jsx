import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x41mlqjoc.css';
import '../../css/x/xhj1trd8o.css';
import '../../css/j/j_9swybeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x41mlqjoc"/><path class="xhj1trd8o"/><path class="j_9swybeu"/></g>`,
		"fallback": "keyline-icons:wallet-sparkles-sharp-two-tone",
	});
}

export default Component;
