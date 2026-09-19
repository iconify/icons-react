import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pii91ccva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pii91ccva"/>`,
		"fallback": "flowbite:martini-glass-solid",
	});
}

export default Component;
