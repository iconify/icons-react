import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jbsmz5cgw.css';
import '../../css/i/ida3dz87g.css';
import '../../css/d/dxi3c3bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jbsmz5cgw"/><path class="ida3dz87g"/><path class="dxi3c3bdb"/></g>`,
		"fallback": "mage:notification-bell-muted",
	});
}

export default Component;
