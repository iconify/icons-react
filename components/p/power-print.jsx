import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h12mmx6jh.css';
import '../../css/u/u4l8uj5fs.css';
import '../../css/h/hg6hx7b4o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h12mmx6jh"/><path class="u4l8uj5fs"/><path class="hg6hx7b4o"/></g>`,
		"fallback": "pepicons:power-print",
	});
}

export default Component;
