import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me4702b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me4702b8u"/>`,
		"fallback": "heroicons-outline:plus-circle",
	});
}

export default Component;
