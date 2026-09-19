import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-wpj6bfy.css';
import '../../css/b/bzm1v6wbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p-wpj6bfy"/><path class="bzm1v6wbv"/></g>`,
		"fallback": "hugeicons:right-angle",
	});
}

export default Component;
