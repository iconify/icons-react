import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v0dh77b3j.css';
import '../../css/e/ess6f3oak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v0dh77b3j"/><path class="ess6f3oak"/></g>`,
		"fallback": "keyline-icons:panel-right-dashed-sharp-fill",
	});
}

export default Component;
