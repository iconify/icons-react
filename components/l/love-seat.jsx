import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oda7t_bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oda7t_bbe"/>`,
		"fallback": "mdi:love-seat",
	});
}

export default Component;
