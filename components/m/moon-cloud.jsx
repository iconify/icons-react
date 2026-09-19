import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yb5ocvxyk.css';
import '../../css/p/pq356ln7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yb5ocvxyk"/><path class="pq356ln7v"/></g>`,
		"fallback": "hugeicons:moon-cloud",
	});
}

export default Component;
