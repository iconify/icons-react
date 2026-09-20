import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zj1ox3y5p.css';
import '../../css/m/m0eonib3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zj1ox3y5p"/><path class="m0eonib3i"/></g>`,
		"fallback": "streamline-freehand-color:time-clock-24-hrs-2",
	});
}

export default Component;
