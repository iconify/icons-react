import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/phq1xbbnt.css';
import '../../css/z/z5biwpb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="phq1xbbnt"/><path class="z5biwpb9s"/></g>`,
		"fallback": "keyline-icons:truck-minus-sharp-fill",
	});
}

export default Component;
