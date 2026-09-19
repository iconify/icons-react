import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wyjl0vb2h.css';
import '../../css/j/jxshmtbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wyjl0vb2h"/><path class="jxshmtbao"/></g>`,
		"fallback": "hugeicons:message-multiple-01",
	});
}

export default Component;
