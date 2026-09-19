import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1okvdt1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1okvdt1d"/>`,
		"fallback": "heroicons-outline:server",
	});
}

export default Component;
