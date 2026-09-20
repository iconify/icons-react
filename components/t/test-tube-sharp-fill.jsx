import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rmqlc6x4e.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rmqlc6x4e"/><path class="dx93_50hj"/></g>`,
		"fallback": "keyline-icons:test-tube-sharp-fill",
	});
}

export default Component;
