import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kp_7cv0uf.css';
import '../../css/v/vekz44bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kp_7cv0uf"/><path class="vekz44bsy"/></g>`,
		"fallback": "keyline-icons:monitor-off-sharp-two-tone",
	});
}

export default Component;
