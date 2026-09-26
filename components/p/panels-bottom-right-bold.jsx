import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hku6jab1q.css';
import '../../css/q/qia370byn.css';
import '../../css/h/hzk5kpusw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hku6jab1q"/><path class="qia370byn"/><path clip-rule="evenodd" class="hzk5kpusw"/></g>`,
		"fallback": "solar:panels-bottom-right-bold",
	});
}

export default Component;
