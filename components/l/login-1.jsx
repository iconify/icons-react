import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kr2c4etpz.css';
import '../../css/t/tl6e7qb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kr2c4etpz"/><path class="tl6e7qb8d"/></g>`,
		"fallback": "streamline-ultimate:login-1",
	});
}

export default Component;
