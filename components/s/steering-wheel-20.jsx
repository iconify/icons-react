import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/y/yxwm-unqh.css';
import '../../css/c/ctg78en2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="yxwm-unqh"/><path class="ctg78en2s"/>`,
		"fallback": "energy-icons:steering-wheel-20",
	});
}

export default Component;
