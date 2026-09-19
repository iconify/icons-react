import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqtl-_k4s.css';
import '../../css/c/c5fpjcc5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hqtl-_k4s"/><path class="c5fpjcc5y"/></g>`,
		"fallback": "hugeicons:trees",
	});
}

export default Component;
