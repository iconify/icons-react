import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe_m0xv8t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe_m0xv8t"/>`,
		"fallback": "ant-design:pie-chart-outlined",
	});
}

export default Component;
