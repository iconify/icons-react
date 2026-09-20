import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9tkkacpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9tkkacpi"/>`,
		"fallback": "mdi:user-tie",
	});
}

export default Component;
