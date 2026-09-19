import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nhcvosnan.css';
import '../../css/d/d5tuc-v4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nhcvosnan"/><path class="d5tuc-v4s"/></g>`,
		"fallback": "hugeicons:receipt-dollar",
	});
}

export default Component;
