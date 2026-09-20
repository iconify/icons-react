import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfipd280o.css';
import '../../css/y/y44zwradt.css';
import '../../css/t/t1b72z_sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jfipd280o"/><path class="y44zwradt"/><path class="t1b72z_sa"/></g>`,
		"fallback": "streamline-freehand-color:taking-pictures-circle",
	});
}

export default Component;
