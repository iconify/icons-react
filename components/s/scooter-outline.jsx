import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5712_bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5712_bul"/>`,
		"fallback": "solar:scooter-outline",
	});
}

export default Component;
