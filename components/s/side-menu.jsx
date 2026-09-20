import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q73cn2d1k.css';
import '../../css/q/qleex8blj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="q73cn2d1k"/><path class="qleex8blj"/></g>`,
		"fallback": "system-uicons:side-menu",
	});
}

export default Component;
