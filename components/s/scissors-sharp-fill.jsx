import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x1q46ybnx.css';
import '../../css/w/w3nhkrb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x1q46ybnx"/><path class="w3nhkrb6x"/></g>`,
		"fallback": "keyline-icons:scissors-sharp-fill",
	});
}

export default Component;
