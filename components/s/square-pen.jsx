import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/ke1tr34rn.css';
import '../../css/q/qdqlbh0lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ke1tr34rn"/><path class="qdqlbh0lv"/></g>`,
		"fallback": "hugeicons:square-pen",
	});
}

export default Component;
