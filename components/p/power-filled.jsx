import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7g2pcbpg.css';
import '../../css/g/gx1dibbnm.css';
import '../../css/u/ucj31ibdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r7g2pcbpg"/><path class="gx1dibbnm"/><path class="ucj31ibdn"/></g>`,
		"fallback": "reicon:power-filled",
	});
}

export default Component;
