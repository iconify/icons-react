import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3m5n3c2p.css';
import '../../css/p/pqyg4ok7s.css';
import '../../css/z/z-7pz9x4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k3m5n3c2p"/><path class="pqyg4ok7s"/><path class="z-7pz9x4k"/></g>`,
		"fallback": "reicon:layers-alt-filled",
	});
}

export default Component;
