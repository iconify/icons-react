import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb-u0qbgn.css';
import '../../css/w/wbq_xk3gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wb-u0qbgn"/><path class="wbq_xk3gw"/></g>`,
		"fallback": "hugeicons:message-02",
	});
}

export default Component;
