import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kd924u26p.css';
import '../../css/f/fce_00bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kd924u26p"/><path class="fce_00bqa"/></g>`,
		"fallback": "keyline-icons:rocket-vertical-sharp-fill",
	});
}

export default Component;
