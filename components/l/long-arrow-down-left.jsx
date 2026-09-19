import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_5_nyb9h.css';
import '../../css/l/l8zfa9ryh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r_5_nyb9h"/><path class="l8zfa9ryh"/></g>`,
		"fallback": "iconoir:long-arrow-down-left",
	});
}

export default Component;
