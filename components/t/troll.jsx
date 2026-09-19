import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8hpuebhu.css';
import '../../css/v/v1olksora.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q8hpuebhu"/><path class="v1olksora"/></g>`,
		"fallback": "at-icons:troll",
	});
}

export default Component;
