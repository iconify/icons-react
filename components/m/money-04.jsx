import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gizxvtbsy.css';
import '../../css/e/exv6zmb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gizxvtbsy"/><path class="exv6zmb5k"/></g>`,
		"fallback": "hugeicons:money-04",
	});
}

export default Component;
