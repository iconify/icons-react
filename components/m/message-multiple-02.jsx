import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jhr9le53m.css';
import '../../css/t/t30zd21el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jhr9le53m"/><path class="t30zd21el"/></g>`,
		"fallback": "hugeicons:message-multiple-02",
	});
}

export default Component;
