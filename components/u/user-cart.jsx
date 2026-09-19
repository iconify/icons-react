import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q1hfxcl4y.css';
import '../../css/r/raa148t7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q1hfxcl4y"/><path class="raa148t7u"/></g>`,
		"fallback": "iconoir:user-cart",
	});
}

export default Component;
