import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4ro0ccgs.css';
import '../../css/b/bvni3sb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u4ro0ccgs"/><path class="bvni3sb1v"/></g>`,
		"fallback": "hugeicons:message-circle-warning",
	});
}

export default Component;
