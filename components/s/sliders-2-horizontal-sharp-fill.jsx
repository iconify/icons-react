import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cs9frwbde.css';
import '../../css/k/k6bonybms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cs9frwbde"/><path class="k6bonybms"/></g>`,
		"fallback": "keyline-icons:sliders-2-horizontal-sharp-fill",
	});
}

export default Component;
