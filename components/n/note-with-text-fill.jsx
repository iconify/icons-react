import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aikpq8biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aikpq8biq"/>`,
		"fallback": "mage:note-with-text-fill",
	});
}

export default Component;
