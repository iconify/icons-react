import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/epepgykcc.css';
import '../../css/s/sppep1b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="epepgykcc"/><path class="sppep1b_g"/></g>`,
		"fallback": "keyline-icons:paper-bag-sparkles-sharp",
	});
}

export default Component;
