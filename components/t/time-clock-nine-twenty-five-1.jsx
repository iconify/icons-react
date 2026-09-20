import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efcc43b4p.css';
import '../../css/y/ykg1acbvw.css';
import '../../css/d/dn17_cc6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efcc43b4p"/><path class="ykg1acbvw"/><path class="dn17_cc6k"/></g>`,
		"fallback": "streamline-freehand-color:time-clock-nine-twenty-five-1",
	});
}

export default Component;
