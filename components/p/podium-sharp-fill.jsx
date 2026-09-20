import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ehvte120k.css';
import '../../css/w/w2x086bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ehvte120k"/><path class="w2x086bvu"/></g>`,
		"fallback": "keyline-icons:podium-sharp-fill",
	});
}

export default Component;
