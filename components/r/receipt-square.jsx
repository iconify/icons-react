import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/p/p1pbzqmsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvymobzlx"/><path class="p1pbzqmsd"/></g>`,
		"fallback": "reicon:receipt-square",
	});
}

export default Component;
