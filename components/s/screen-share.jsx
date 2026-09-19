import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/we7ekht8p.css';
import '../../css/t/tkvf7_mjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="we7ekht8p"/><path class="tkvf7_mjf"/></g>`,
		"fallback": "hugeicons:screen-share",
	});
}

export default Component;
