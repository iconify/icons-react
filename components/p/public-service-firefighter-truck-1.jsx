import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmvwktb5q.css';
import '../../css/j/juk05_rry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tmvwktb5q"/><path class="juk05_rry"/></g>`,
		"fallback": "streamline-ultimate:public-service-firefighter-truck-1",
	});
}

export default Component;
