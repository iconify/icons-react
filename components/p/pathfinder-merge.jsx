import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueolijb3i.css';
import '../../css/o/otl0_qbpi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ueolijb3i"/><path class="otl0_qbpi"/></g>`,
		"fallback": "streamline-color:pathfinder-merge",
	});
}

export default Component;
