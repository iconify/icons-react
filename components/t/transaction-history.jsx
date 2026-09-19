import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ly3o8obks.css';
import '../../css/z/zffbwxb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ly3o8obks"/><path class="zffbwxb-h"/></g>`,
		"fallback": "hugeicons:transaction-history",
	});
}

export default Component;
