import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ivqwujm_a.css';
import '../../css/g/g6fj2t6ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ivqwujm_a"/><path class="g6fj2t6ag"/></g>`,
		"fallback": "andrsrxn:reorder-up",
	});
}

export default Component;
