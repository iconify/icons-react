import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uarzt5bwz.css';
import '../../css/h/hj0slhgcd.css';
import '../../css/e/edmqrneld.css';
import '../../css/a/aq4c_bbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uarzt5bwz wm-shadow"/><path class="hj0slhgcd wm-shadow"/><path class="edmqrneld"/><path class="aq4c_bbme"/></g>`,
		"fallback": "withicons-brutal:maximize",
	});
}

export default Component;
