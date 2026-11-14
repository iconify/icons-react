import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l51hm_byx.css';
import '../../css/p/p46zohbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l51hm_byx"/><path class="p46zohbfh"/></g>`,
		"fallback": "hugeicons:repair",
	});
}

export default Component;
