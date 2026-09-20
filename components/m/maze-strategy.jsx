import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mve0jibyn.css';
import '../../css/d/dly0bybrd.css';
import '../../css/x/xjjvqp5zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mve0jibyn"/><path class="dly0bybrd"/><path class="xjjvqp5zj"/></g>`,
		"fallback": "streamline-ultimate:maze-strategy",
	});
}

export default Component;
