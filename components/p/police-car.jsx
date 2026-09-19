import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c74powpze.css';
import '../../css/n/nqox6acut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="c74powpze"/><path class="nqox6acut"/></g>`,
		"fallback": "hugeicons:police-car",
	});
}

export default Component;
