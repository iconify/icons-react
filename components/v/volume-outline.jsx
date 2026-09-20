import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6l25-o4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v6l25-o4z"/>`,
		"fallback": "solar:volume-outline",
	});
}

export default Component;
