import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5aheew-y.css';
import '../../css/p/puwp7-dtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f5aheew-y"/><path class="puwp7-dtz"/></g>`,
		"fallback": "hugeicons:login-circle-01",
	});
}

export default Component;
