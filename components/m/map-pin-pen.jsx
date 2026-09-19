import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji5sf-bhp.css';
import '../../css/i/i59jeg-at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ji5sf-bhp"/><path class="i59jeg-at"/></g>`,
		"fallback": "hugeicons:map-pin-pen",
	});
}

export default Component;
