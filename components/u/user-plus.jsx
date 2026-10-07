import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t2cbi98hw.css';
import '../../css/m/mpg0prmyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t2cbi98hw"/><path class="mpg0prmyt"/></g>`,
		"fallback": "iconoir:user-plus",
	});
}

export default Component;
