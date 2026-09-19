import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozp9g2b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ozp9g2b1h"/>`,
		"fallback": "flowbite:server-solid",
	});
}

export default Component;
