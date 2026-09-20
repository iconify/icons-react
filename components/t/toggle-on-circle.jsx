import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbnr4p1ic.css';
import '../../css/k/kqd9kib1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rbnr4p1ic"/><path class="kqd9kib1x"/></g>`,
		"fallback": "reicon:toggle-on-circle",
	});
}

export default Component;
