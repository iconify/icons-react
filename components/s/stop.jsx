import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/t/tydx89bkk.css';
import '../../css/m/mth_jkjsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="tydx89bkk"/><path class="mth_jkjsy"/></g>`,
		"fallback": "akar-icons:stop",
	});
}

export default Component;
