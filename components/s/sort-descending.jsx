import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tdzycbbny.css';
import '../../css/u/us1b3hblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tdzycbbny"/><path class="us1b3hblm"/></g>`,
		"fallback": "hugeicons:sort-descending",
	});
}

export default Component;
