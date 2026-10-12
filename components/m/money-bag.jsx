import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-av6myby.css';
import '../../css/n/nu7_7k9et.css';
import '../../css/j/j8g-si0pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-av6myby"/><path class="nu7_7k9et"/><path class="j8g-si0pr"/></g>`,
		"fallback": "andrsrxn:money-bag",
	});
}

export default Component;
