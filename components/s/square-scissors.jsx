import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/em9r4fb9t.css';
import '../../css/g/gsj2n0v7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="em9r4fb9t"/><path class="gsj2n0v7l"/></g>`,
		"fallback": "hugeicons:square-scissors",
	});
}

export default Component;
