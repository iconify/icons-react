import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu8bw5b-m.css';
import '../../css/f/f0qb2ibdt.css';
import '../../css/o/om0p6ubzq.css';
import '../../css/h/h6ki9qa1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bu8bw5b-m"/><path class="f0qb2ibdt"/><path class="om0p6ubzq"/><path class="h6ki9qa1c"/></g>`,
		"fallback": "streamline-freehand-color:money-coin-cash",
	});
}

export default Component;
