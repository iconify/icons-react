import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vq_ekhekb.css';
import '../../css/i/iv3qn5boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vq_ekhekb"/><path class="iv3qn5boq"/></g>`,
		"fallback": "iconoir:vue-js",
	});
}

export default Component;
