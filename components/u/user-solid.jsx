import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8ee6my5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y8ee6my5i"/>`,
		"fallback": "flowbite:user-solid",
	});
}

export default Component;
