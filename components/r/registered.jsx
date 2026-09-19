import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wu13qac7h.css';
import '../../css/y/yk60_vm2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wu13qac7h"/><path class="yk60_vm2p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:registered",
	});
}

export default Component;
