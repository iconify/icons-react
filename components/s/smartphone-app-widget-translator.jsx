import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdrlu0bwb.css';
import '../../css/m/ms_kxebqt.css';
import '../../css/o/oi21o8mcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mdrlu0bwb"/><path class="ms_kxebqt"/><path class="oi21o8mcp"/></g>`,
		"fallback": "streamline-freehand-color:smartphone-app-widget-translator",
	});
}

export default Component;
