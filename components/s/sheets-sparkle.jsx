import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5q97tbfj.css';
import '../../css/x/xnbmmdbfm.css';
import '../../css/g/g9qxn4b9s.css';
import '../../css/n/n0g83u1ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5q97tbfj"/><path class="xnbmmdbfm"/><path class="g9qxn4b9s"/><path class="n0g83u1ki"/></g>`,
		"fallback": "andrsrxn:sheets-sparkle",
	});
}

export default Component;
