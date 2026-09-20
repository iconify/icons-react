import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsyqafb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dsyqafb0z"/>`,
		"fallback": "solar:to-pip-outline",
	});
}

export default Component;
