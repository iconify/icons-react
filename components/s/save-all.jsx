import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o2jno2buj.css';
import '../../css/i/iru49qbqh.css';
import '../../css/j/jny2pkb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o2jno2buj"/><path class="iru49qbqh"/><path class="jny2pkb_q"/></g>`,
		"fallback": "hugeicons:save-all",
	});
}

export default Component;
