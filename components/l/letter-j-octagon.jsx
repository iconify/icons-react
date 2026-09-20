import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rmcdni9el.css';
import '../../css/c/cgk8wsbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rmcdni9el"/><path class="cgk8wsbcl"/></g>`,
		"fallback": "mynaui:letter-j-octagon",
	});
}

export default Component;
