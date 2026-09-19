import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tz9bkmbzx.css';
import '../../css/m/mnl-1wjwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tz9bkmbzx"/><path class="mnl-1wjwu"/></g>`,
		"fallback": "iconoir:rhombus-arrow-right",
	});
}

export default Component;
