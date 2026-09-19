import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsejse-7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsejse-7a"/>`,
		"fallback": "bitcoin-icons:send-outline",
	});
}

export default Component;
