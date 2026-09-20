import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp78fnb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp78fnb-c"/>`,
		"fallback": "uis:keyhole-square-full",
	});
}

export default Component;
