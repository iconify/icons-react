import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8o2m2y3d.css';
import '../../css/o/o9plznbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8o2m2y3d"/><path class="o9plznbtk"/></g>`,
		"fallback": "streamline-freehand-color:smiley-dizzy",
	});
}

export default Component;
