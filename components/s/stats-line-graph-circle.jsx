import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btysz1ffz.css';
import '../../css/y/y1rbk-21s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btysz1ffz"/><path class="y1rbk-21s"/></g>`,
		"fallback": "streamline-freehand-color:stats-line-graph-circle",
	});
}

export default Component;
