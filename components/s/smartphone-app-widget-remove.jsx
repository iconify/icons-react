import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1p6qfb0z.css';
import '../../css/b/b8mfld0zy.css';
import '../../css/g/gx7601vyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x1p6qfb0z"/><path class="b8mfld0zy"/><path class="gx7601vyn"/></g>`,
		"fallback": "streamline-freehand-color:smartphone-app-widget-remove",
	});
}

export default Component;
