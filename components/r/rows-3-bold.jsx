import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqd2xacpf.css';
import '../../css/q/qxzywebjk.css';
import '../../css/w/wazzm0b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wqd2xacpf"/><path class="qxzywebjk"/><path class="wazzm0b2d"/></g>`,
		"fallback": "solar:rows-3-bold",
	});
}

export default Component;
