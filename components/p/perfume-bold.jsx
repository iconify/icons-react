import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmq89q76z.css';
import '../../css/o/o03v5eiow.css';
import '../../css/y/yy2rggufu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmq89q76z"/><path class="o03v5eiow"/><path class="yy2rggufu"/></g>`,
		"fallback": "solar:perfume-bold",
	});
}

export default Component;
