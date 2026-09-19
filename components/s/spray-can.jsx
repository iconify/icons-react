import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/olfotioad.css';
import '../../css/y/yl_mxbv2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="olfotioad"/><path class="yl_mxbv2s"/></g>`,
		"fallback": "hugeicons:spray-can",
	});
}

export default Component;
