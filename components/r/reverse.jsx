import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iiapfbc3q.css';
import '../../css/x/x85l7c-5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="iiapfbc3q"/><path class="x85l7c-5o"/></g>`,
		"fallback": "proicons:reverse",
	});
}

export default Component;
