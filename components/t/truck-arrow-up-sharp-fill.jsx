import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/phq1xbbnt.css';
import '../../css/i/in781saan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="phq1xbbnt"/><path class="in781saan"/></g>`,
		"fallback": "keyline-icons:truck-arrow-up-sharp-fill",
	});
}

export default Component;
