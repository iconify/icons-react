import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4r__bbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4r__bbsf"/>`,
		"fallback": "flowbite:reply-all-solid",
	});
}

export default Component;
