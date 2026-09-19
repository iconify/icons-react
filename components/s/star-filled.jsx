import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhqi00bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhqi00bgz"/>`,
		"fallback": "bitcoin-icons:star-filled",
	});
}

export default Component;
