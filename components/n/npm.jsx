import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/oo4jlxnap.css';
import '../../css/l/l9vhwx7ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="oo4jlxnap"/><path class="l9vhwx7ob"/></g>`,
		"fallback": "hugeicons:npm",
	});
}

export default Component;
