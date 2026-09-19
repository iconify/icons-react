import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sq7x27b-s.css';
import '../../css/y/yphewc7qd.css';
import '../../css/o/orp2owizz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sq7x27b-s"/><circle class="yphewc7qd"/><path class="orp2owizz"/></g>`,
		"fallback": "hugeicons:shape-collection",
	});
}

export default Component;
