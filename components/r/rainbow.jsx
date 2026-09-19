import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/je98fibcj.css';
import '../../css/p/p3wftabhp.css';
import '../../css/k/kt_vqgb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="je98fibcj"/><path class="p3wftabhp"/><path class="kt_vqgb8w"/></g>`,
		"fallback": "hugeicons:rainbow",
	});
}

export default Component;
