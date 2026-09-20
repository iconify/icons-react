import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwysefv-t.css';
import '../../css/g/g8qccm5rq.css';
import '../../css/c/ccjtnkscg.css';
import '../../css/a/awgadkllq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hwysefv-t"/><path class="g8qccm5rq"/><path class="ccjtnkscg"/><path class="awgadkllq"/></g>`,
		"fallback": "solar:shield-bold",
	});
}

export default Component;
