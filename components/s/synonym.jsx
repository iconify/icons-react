import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pea5zybsn.css';
import '../../css/q/qgrwgs-oo.css';
import '../../css/o/o3e0mvbzo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pea5zybsn"><path class="qgrwgs-oo"/><path clip-rule="evenodd" class="o3e0mvbzo"/></g>`,
		"fallback": "thesvg-color:synonym",
	});
}

export default Component;
