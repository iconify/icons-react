import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ka73etb1i.css';
import '../../css/w/wrtgc-6dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ka73etb1i"/><path clip-rule="evenodd" class="wrtgc-6dh"/></g>`,
		"fallback": "reicon:timer-filled",
	});
}

export default Component;
