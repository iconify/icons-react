import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tuwi-qbhc.css';
import '../../css/l/lzgkhho9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tuwi-qbhc"/><path class="lzgkhho9a"/></g>`,
		"fallback": "hugeicons:time-quarter-02",
	});
}

export default Component;
