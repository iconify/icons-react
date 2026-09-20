import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9hyj9bnq.css';
import '../../css/m/md9amzbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c9hyj9bnq"/><path class="md9amzbmq"/></g>`,
		"fallback": "pixelarticons:utility-pole",
	});
}

export default Component;
