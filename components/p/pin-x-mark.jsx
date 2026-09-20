import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3zw379dl.css';
import '../../css/e/e_m7ycbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m3zw379dl"/><path class="e_m7ycbyy"/></g>`,
		"fallback": "streamline-ultimate:pin-x-mark",
	});
}

export default Component;
