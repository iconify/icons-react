import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r0v1zm2cl.css';
import '../../css/w/wbhfocm-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r0v1zm2cl"/><path class="wbhfocm-k"/></g>`,
		"fallback": "keyline-icons:monitor-sharp-two-tone",
	});
}

export default Component;
