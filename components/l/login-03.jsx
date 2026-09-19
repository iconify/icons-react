import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gpt_3w-gb.css';
import '../../css/q/q32uyd7nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gpt_3w-gb"/><path class="q32uyd7nb"/></g>`,
		"fallback": "hugeicons:login-03",
	});
}

export default Component;
