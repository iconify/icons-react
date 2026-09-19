import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9wtjkbuo.css';
import '../../css/h/h4iqv8ecx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g9wtjkbuo"/><path class="h4iqv8ecx"/></g>`,
		"fallback": "hugeicons:shopping-bag-remove",
	});
}

export default Component;
