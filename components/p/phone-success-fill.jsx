import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr76ttb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr76ttb-d"/>`,
		"fallback": "mingcute:phone-success-fill",
	});
}

export default Component;
