import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7tth8b1y.css';
import '../../css/x/xpp-aabgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7tth8b1y"/><path clip-rule="evenodd" class="xpp-aabgz"/></g>`,
		"fallback": "reicon:star-ring-filled",
	});
}

export default Component;
