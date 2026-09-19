import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktad9rv_f.css';
import '../../css/h/hxuze3boh.css';
import '../../css/d/ddwq8rb0d.css';

const viewBox = {"width":25,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktad9rv_f"/><path class="hxuze3boh"/><circle class="ddwq8rb0d"/></g>`,
		"fallback": "et:tablet",
	});
}

export default Component;
