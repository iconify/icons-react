import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9g9e5wbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9g9e5wbb"/>`,
		"fallback": "griddy-icons:wallet-alt-03-filled",
	});
}

export default Component;
