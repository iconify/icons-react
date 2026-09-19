import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh_8zbb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eh_8zbb3r"/>`,
		"fallback": "flowbite:map-pin-alt-solid",
	});
}

export default Component;
