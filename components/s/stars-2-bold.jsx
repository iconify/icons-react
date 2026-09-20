import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z21bshiay.css';
import '../../css/f/fy5s3vr0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z21bshiay"/><path class="fy5s3vr0c"/></g>`,
		"fallback": "solar:stars-2-bold",
	});
}

export default Component;
