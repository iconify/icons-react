import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dfgbwccgu.css';
import '../../css/i/ibgi1ebka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dfgbwccgu"/><path class="ibgi1ebka"/></g>`,
		"fallback": "hugeicons:payment-01",
	});
}

export default Component;
