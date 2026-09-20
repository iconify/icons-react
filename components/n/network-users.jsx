import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nk_9rob_x.css';
import '../../css/i/iv8rhe47p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nk_9rob_x"/><path class="iv8rhe47p"/></g>`,
		"fallback": "streamline-ultimate:network-users",
	});
}

export default Component;
