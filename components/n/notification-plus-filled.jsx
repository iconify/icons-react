import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6bskxbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6bskxbpj"/>`,
		"fallback": "griddy-icons:notification-plus-filled",
	});
}

export default Component;
