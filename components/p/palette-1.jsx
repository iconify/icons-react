import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whp4yub_x.css';
import '../../css/w/wm2al-b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whp4yub_x"/><path class="wm2al-b-g"/></g>`,
		"fallback": "tdesign:palette-1",
	});
}

export default Component;
