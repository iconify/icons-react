import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m14lxqbyx.css';
import '../../css/z/z_f8jsbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m14lxqbyx"/><path class="z_f8jsbzz"/></g>`,
		"fallback": "withicons-retro:plus",
	});
}

export default Component;
