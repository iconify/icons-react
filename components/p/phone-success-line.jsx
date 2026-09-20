import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tonk8_bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tonk8_bym"/>`,
		"fallback": "mingcute:phone-success-line",
	});
}

export default Component;
