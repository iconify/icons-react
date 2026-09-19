import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esng_0bal.css';
import '../../css/c/cgqzrdglk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esng_0bal"/><path class="cgqzrdglk"/></g>`,
		"fallback": "heroicons:speaker-wave-20-solid",
	});
}

export default Component;
