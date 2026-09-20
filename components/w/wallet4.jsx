import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4ib0gbqn.css';
import '../../css/t/terq8rrsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4ib0gbqn"/><path class="terq8rrsy"/></g>`,
		"fallback": "reicon:wallet4",
	});
}

export default Component;
