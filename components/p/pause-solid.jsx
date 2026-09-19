import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy9631bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zy9631bew"/>`,
		"fallback": "flowbite:pause-solid",
	});
}

export default Component;
