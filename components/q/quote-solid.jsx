import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imoh3dbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="imoh3dbho"/>`,
		"fallback": "flowbite:quote-solid",
	});
}

export default Component;
