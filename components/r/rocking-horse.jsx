import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wx38zib9k.css';
import '../../css/q/q0mhllb1k.css';
import '../../css/p/pub4l-79m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wx38zib9k"/><path class="q0mhllb1k"/><path class="pub4l-79m"/></g>`,
		"fallback": "hugeicons:rocking-horse",
	});
}

export default Component;
