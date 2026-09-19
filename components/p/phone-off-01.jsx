import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxv261b5j.css';
import '../../css/o/os0z8-lwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxv261b5j"/><path class="os0z8-lwn"/></g>`,
		"fallback": "hugeicons:phone-off-01",
	});
}

export default Component;
