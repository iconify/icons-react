import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueptk5xjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ueptk5xjy"/>`,
		"fallback": "flowbite:mastercard-solid",
	});
}

export default Component;
