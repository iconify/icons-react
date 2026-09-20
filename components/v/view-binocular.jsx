import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2nzvx1us.css';
import '../../css/s/s_plwmgtd.css';
import '../../css/q/qzzhnccem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2nzvx1us"/><path class="s_plwmgtd"/><path class="qzzhnccem"/></g>`,
		"fallback": "streamline-freehand-color:view-binocular",
	});
}

export default Component;
