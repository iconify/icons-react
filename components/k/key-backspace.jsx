import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o69q6zbcl.css';
import '../../css/i/iwf1k9b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o69q6zbcl"/><path class="iwf1k9b4o"/></g>`,
		"fallback": "andrsrxn:key-backspace",
	});
}

export default Component;
