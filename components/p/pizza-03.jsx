import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pwq6upb4i.css';
import '../../css/w/wel1v5b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pwq6upb4i"/><path class="wel1v5b6h"/></g>`,
		"fallback": "hugeicons:pizza-03",
	});
}

export default Component;
