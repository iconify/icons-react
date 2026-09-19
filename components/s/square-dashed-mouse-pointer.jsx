import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h_mcpzbxp.css';
import '../../css/w/wca_e2byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="h_mcpzbxp"/><path class="wca_e2byw"/></g>`,
		"fallback": "hugeicons:square-dashed-mouse-pointer",
	});
}

export default Component;
