import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o41_ooc7v.css';
import '../../css/a/ai_hwz5xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o41_ooc7v"/><path class="ai_hwz5xx"/></g>`,
		"fallback": "keyline-icons:route-sharp-two-tone",
	});
}

export default Component;
