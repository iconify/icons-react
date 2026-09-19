import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/djjv7_b8y.css';
import '../../css/e/es4h2kbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="djjv7_b8y"/><path class="es4h2kbpt"/></g>`,
		"fallback": "hugeicons:smartphone-charging",
	});
}

export default Component;
