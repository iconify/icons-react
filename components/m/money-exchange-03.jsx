import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tk05-6mhx.css';
import '../../css/i/i3wcg_a4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tk05-6mhx"/><path class="i3wcg_a4y"/></g>`,
		"fallback": "hugeicons:money-exchange-03",
	});
}

export default Component;
