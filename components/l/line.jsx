import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dmnptj-2l.css';
import '../../css/c/come3gqds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dmnptj-2l"/><path class="come3gqds"/></g>`,
		"fallback": "hugeicons:line",
	});
}

export default Component;
