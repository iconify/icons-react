import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8sa73bej.css';
import '../../css/j/jmm8-fblo.css';
import '../../css/r/r4geg090s.css';
import '../../css/g/g_z8lvgro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8sa73bej"/><path class="jmm8-fblo"/><path class="r4geg090s"/><path class="g_z8lvgro"/></g>`,
		"fallback": "streamline-freehand-color:security-gdpr-browser",
	});
}

export default Component;
