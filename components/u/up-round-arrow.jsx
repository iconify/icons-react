import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f20rlbb8g.css';
import '../../css/o/ozipg7bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f20rlbb8g"/><path class="ozipg7bdf"/></g>`,
		"fallback": "iconoir:up-round-arrow",
	});
}

export default Component;
