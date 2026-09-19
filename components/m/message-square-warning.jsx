import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n58-9tbcx.css';
import '../../css/x/x45x9-l1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n58-9tbcx"/><path class="x45x9-l1o"/></g>`,
		"fallback": "hugeicons:message-square-warning",
	});
}

export default Component;
