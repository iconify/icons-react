import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-_kgfdpe.css';
import '../../css/u/umov5rbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-_kgfdpe"/><path class="umov5rbqq"/></g>`,
		"fallback": "streamline-freehand-color:power-supply-plug",
	});
}

export default Component;
