import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgh_g4bgc.css';
import '../../css/e/e57n8cb9m.css';
import '../../css/j/j994ddc2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgh_g4bgc"/><path class="e57n8cb9m"/><path class="j994ddc2f"/></g>`,
		"fallback": "streamline-cyber-color:mobile-phone-vibration",
	});
}

export default Component;
