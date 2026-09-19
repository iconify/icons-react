import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/scbvtlb0u.css';
import '../../css/s/sh-yfkprb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="scbvtlb0u"/><path class="sh-yfkprb"/></g>`,
		"fallback": "hugeicons:rat",
	});
}

export default Component;
