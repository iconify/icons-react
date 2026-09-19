import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/w5facebne.css';
import '../../css/e/ea-wkh45t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="w5facebne"/><path class="ea-wkh45t"/></g>`,
		"fallback": "bitcoin-icons:node-hardware-outline",
	});
}

export default Component;
