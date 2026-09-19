import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpyti5o6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpyti5o6t"/>`,
		"fallback": "flowbite:toggle-header-column-outline",
	});
}

export default Component;
