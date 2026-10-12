import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyrbmh4wb.css';
import '../../css/k/kjsu1jshe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyrbmh4wb"/><path class="kjsu1jshe"/></g>`,
		"fallback": "andrsrxn:train-front",
	});
}

export default Component;
