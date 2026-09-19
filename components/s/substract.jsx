import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rlhgxg0rl.css';
import '../../css/v/v199v8bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rlhgxg0rl"/><path class="v199v8bwz"/></g>`,
		"fallback": "iconoir:substract",
	});
}

export default Component;
