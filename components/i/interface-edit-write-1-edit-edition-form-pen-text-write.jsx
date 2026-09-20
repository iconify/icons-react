import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8qxkjbwi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8qxkjbwi"/>`,
		"fallback": "streamline:interface-edit-write-1-edit-edition-form-pen-text-write",
	});
}

export default Component;
