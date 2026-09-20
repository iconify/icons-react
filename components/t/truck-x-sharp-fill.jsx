import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/phq1xbbnt.css';
import '../../css/d/dtguq186l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="phq1xbbnt"/><path class="dtguq186l"/></g>`,
		"fallback": "keyline-icons:truck-x-sharp-fill",
	});
}

export default Component;
