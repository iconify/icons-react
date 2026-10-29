import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k0tm63b0s.css';
import '../../css/v/vvmccbmmh.css';
import '../../css/p/phawmubhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k0tm63b0s"/><path class="vvmccbmmh"/><path class="phawmubhy wm-a"/></g>`,
		"fallback": "withicons:paintbrush",
	});
}

export default Component;
