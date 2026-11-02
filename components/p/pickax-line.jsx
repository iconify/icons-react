import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti_d_mbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti_d_mbqj"/>`,
		"fallback": "mingcute:pickax-line",
	});
}

export default Component;
