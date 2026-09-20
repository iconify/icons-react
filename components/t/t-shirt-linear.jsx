import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clk6xjb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clk6xjb_o"/>`,
		"fallback": "solar:t-shirt-linear",
	});
}

export default Component;
