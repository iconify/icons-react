import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xczyuaciy.css';
import '../../css/t/tsntr_b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xczyuaciy"/><path class="tsntr_b0q"/></g>`,
		"fallback": "keyline-icons:send-clock-sharp-duotone",
	});
}

export default Component;
