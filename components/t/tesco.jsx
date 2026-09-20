import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nif9dh-il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nif9dh-il"/>`,
		"fallback": "simple-icons:tesco",
	});
}

export default Component;
