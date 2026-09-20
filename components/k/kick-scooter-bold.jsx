import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u--wa7b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u--wa7b5z"/>`,
		"fallback": "solar:kick-scooter-bold",
	});
}

export default Component;
