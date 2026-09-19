import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqtgn03gm.css';
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
		"content": `<g class="tqtgn03gm"><path class="wu13qac7h"/><path class="yk60_vm2p"/></g>`,
		"fallback": "fluent-emoji-flat:registered",
	});
}

export default Component;
