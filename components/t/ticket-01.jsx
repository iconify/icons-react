import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h1z0a1bpi.css';
import '../../css/a/a7jc95b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="h1z0a1bpi"/><path class="a7jc95b4l"/></g>`,
		"fallback": "hugeicons:ticket-01",
	});
}

export default Component;
