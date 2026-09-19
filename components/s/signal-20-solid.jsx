import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzcabzb6z.css';
import '../../css/x/xyr4bmbqe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tzcabzb6z"/><path class="xyr4bmbqe"/></g>`,
		"fallback": "heroicons:signal-20-solid",
	});
}

export default Component;
