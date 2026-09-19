import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t90ygqpks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t90ygqpks"/>`,
		"fallback": "boxicons:thumb-up-filled",
	});
}

export default Component;
