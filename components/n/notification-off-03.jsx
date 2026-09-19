import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/od7683zig.css';
import '../../css/o/o12cd2bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="od7683zig"/><path class="o12cd2bbi"/></g>`,
		"fallback": "hugeicons:notification-off-03",
	});
}

export default Component;
