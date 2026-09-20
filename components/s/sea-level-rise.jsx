import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-nb7lr8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-nb7lr8u"/>`,
		"fallback": "mdi:sea-level-rise",
	});
}

export default Component;
