import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee29h57tz.css';
import '../../css/l/loc1uybsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ee29h57tz"/><path class="loc1uybsg"/></g>`,
		"fallback": "andrsrxn:knife",
	});
}

export default Component;
