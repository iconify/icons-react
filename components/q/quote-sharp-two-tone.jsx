import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hk2d_961e.css';
import '../../css/g/gn69crbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hk2d_961e"/><path class="gn69crbrd"/></g>`,
		"fallback": "keyline-icons:quote-sharp-two-tone",
	});
}

export default Component;
