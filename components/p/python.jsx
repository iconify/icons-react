import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy3d3nbmn.css';
import '../../css/o/o2hc18bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iy3d3nbmn"/><path class="o2hc18bli"/></g>`,
		"fallback": "proicons:python",
	});
}

export default Component;
