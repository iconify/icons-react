import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujy0nqbnn.css';
import '../../css/w/w-qnm6kow.css';
import '../../css/h/hwk6tbczd.css';
import '../../css/b/btbnu2b8g.css';
import '../../css/p/pj1vf0rgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujy0nqbnn"/><path class="w-qnm6kow"/><path class="hwk6tbczd"/><path class="btbnu2b8g"/><path class="pj1vf0rgd"/></g>`,
		"fallback": "streamline-ultimate-color:layout-left",
	});
}

export default Component;
