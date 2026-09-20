import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/c/chegubbiq.css';
import '../../css/y/ybum0287x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="chegubbiq"/><path class="ybum0287x"/></g>`,
		"fallback": "system-uicons:jump-backward",
	});
}

export default Component;
