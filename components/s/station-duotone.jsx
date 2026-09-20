import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhnaldtzj.css';
import '../../css/n/n0vk0fbzu.css';
import '../../css/c/c06dsh52r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jhnaldtzj"/><path class="n0vk0fbzu"/><path class="c06dsh52r"/></g>`,
		"fallback": "reicon:station-duotone",
	});
}

export default Component;
