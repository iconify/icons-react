import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pa7zgdcxi.css';
import '../../css/m/m5oplaces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pa7zgdcxi"/><path class="m5oplaces"/></g>`,
		"fallback": "streamline-freehand-color:vintage-tv-1",
	});
}

export default Component;
