import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ys-mc835o.css';
import '../../css/f/fqloeq7pt.css';
import '../../css/u/u5srzu_od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ys-mc835o"/><path class="fqloeq7pt"/><path class="u5srzu_od"/></g>`,
		"fallback": "hugeicons:money-receive-flow-01",
	});
}

export default Component;
