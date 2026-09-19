import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x81pse-8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x81pse-8k"/>`,
		"fallback": "flowbite:npm-solid",
	});
}

export default Component;
