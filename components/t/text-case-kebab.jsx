import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/osu3clbek.css';
import '../../css/q/q_niqwe6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="osu3clbek"/><path class="q_niqwe6v"/></g>`,
		"fallback": "andrsrxn:text-case-kebab",
	});
}

export default Component;
