import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtu5bdc_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtu5bdc_u"/>`,
		"fallback": "mingcute:rain-fill",
	});
}

export default Component;
