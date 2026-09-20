import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p0hhklb3f.css';
import '../../css/y/ynz9_ybsk.css';
import '../../css/j/jpdqneb7h.css';
import '../../css/r/r93-g0b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p0hhklb3f"/><path class="ynz9_ybsk"/><path class="jpdqneb7h"/><path class="r93-g0b4d"/></g>`,
		"fallback": "solar:notification-lines-remove-line-duotone",
	});
}

export default Component;
