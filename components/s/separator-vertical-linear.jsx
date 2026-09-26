import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rb-l41-ka.css';
import '../../css/j/jrvuve-_c.css';
import '../../css/x/x1f4lc3zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rb-l41-ka"/><path class="jrvuve-_c"/><path class="x1f4lc3zb"/></g>`,
		"fallback": "solar:separator-vertical-linear",
	});
}

export default Component;
