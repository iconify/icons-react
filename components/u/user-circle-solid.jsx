import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv-_qpbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv-_qpbhl"/>`,
		"fallback": "flowbite:user-circle-solid",
	});
}

export default Component;
