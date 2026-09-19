import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j08w7bcdk.css';
import '../../css/y/y30qf1prt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path clip-rule="evenodd" class="j08w7bcdk"/><path class="y30qf1prt"/></g>`,
		"fallback": "hugeicons:text-bold",
	});
}

export default Component;
