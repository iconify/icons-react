import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bubclra3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bubclra3t"/>`,
		"fallback": "flowbite:text-slash-solid",
	});
}

export default Component;
