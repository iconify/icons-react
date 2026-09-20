import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5vuxn4jy.css';
import '../../css/c/cuef2hbsq.css';
import '../../css/n/n9x5mw-bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f5vuxn4jy"/><path class="cuef2hbsq"/><path class="n9x5mw-bl"/></g>`,
		"fallback": "streamline-freehand-color:time-clock-circle",
	});
}

export default Component;
