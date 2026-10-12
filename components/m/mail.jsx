import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edmso03vy.css';
import '../../css/o/o8qwv_bxa.css';
import '../../css/p/p74anlbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edmso03vy"/><rect class="o8qwv_bxa"/><path class="p74anlbhw"/></g>`,
		"fallback": "andrsrxn:mail",
	});
}

export default Component;
