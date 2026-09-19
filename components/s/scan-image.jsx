import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ime8t0xqh.css';
import '../../css/l/lg8dat8ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ime8t0xqh"/><path class="lg8dat8ee"/></g>`,
		"fallback": "hugeicons:scan-image",
	});
}

export default Component;
