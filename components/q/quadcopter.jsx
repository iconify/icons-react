import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upgfzx9xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upgfzx9xw"/>`,
		"fallback": "mdi:quadcopter",
	});
}

export default Component;
