import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqjgygk2l.css';
import '../../css/d/dvtqq3p7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oqjgygk2l"/><path class="dvtqq3p7m"/></g>`,
		"fallback": "andrsrxn:text-scan",
	});
}

export default Component;
