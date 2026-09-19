import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d9s8pjq1y.css';
import '../../css/g/g6ibx2b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d9s8pjq1y"/><path class="g6ibx2b2i"/></g>`,
		"fallback": "hugeicons:save-energy-02",
	});
}

export default Component;
