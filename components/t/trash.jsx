import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox-7crkhe.css';
import '../../css/x/x-797_g3v.css';
import '../../css/g/g1gju2brq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ox-7crkhe"/><path class="x-797_g3v"/><path clip-rule="evenodd" class="g1gju2brq"/></g>`,
		"fallback": "pepicons:trash",
	});
}

export default Component;
