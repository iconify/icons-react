import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9om-f5eq.css';
import '../../css/e/ey2rbhb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w9om-f5eq"/><path class="ey2rbhb4h"/></g>`,
		"fallback": "hugeicons:save-money-yen",
	});
}

export default Component;
