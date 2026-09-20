import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oih-iybge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oih-iybge"/>`,
		"fallback": "keyline-icons:toggle-on-fill",
	});
}

export default Component;
