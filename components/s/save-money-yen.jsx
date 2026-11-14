import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa6uupbcb.css';
import '../../css/a/avo0foz6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sa6uupbcb"/><path class="avo0foz6x"/></g>`,
		"fallback": "hugeicons:save-money-yen",
	});
}

export default Component;
