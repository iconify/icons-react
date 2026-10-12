import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znqedw7pe.css';
import '../../css/m/mee4o569l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znqedw7pe"/><path class="mee4o569l"/></g>`,
		"fallback": "andrsrxn:quotes-down",
	});
}

export default Component;
