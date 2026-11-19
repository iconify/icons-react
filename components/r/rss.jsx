import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ozs-xsk0k.css';
import '../../css/h/hmi1wdpxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ozs-xsk0k"/><path class="hmi1wdpxr"/></g>`,
		"fallback": "andrsrxn:rss",
	});
}

export default Component;
