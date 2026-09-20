import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/ypnpm75hx.css';
import '../../css/c/c2ii20bcs.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="ypnpm75hx"/><path class="c2ii20bcs"/></g>`,
		"fallback": "system-uicons:redo",
	});
}

export default Component;
