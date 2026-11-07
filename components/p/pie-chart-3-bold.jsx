import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_t-l-btv.css';
import '../../css/h/h6g7afq-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_t-l-btv"/><path class="h6g7afq-c"/>`,
		"fallback": "solar:pie-chart-3-bold",
	});
}

export default Component;
