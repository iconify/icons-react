import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6_b8q_9v.css';
import '../../css/r/rvuj5tb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6_b8q_9v"/><rect class="rvuj5tb-l"/><rect class="rvuj5tb-l"/></g>`,
		"fallback": "stash:pagination-solid",
	});
}

export default Component;
