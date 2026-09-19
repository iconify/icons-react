import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__i1hb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a__i1hb1s"/>`,
		"fallback": "flowbite:lemon-solid",
	});
}

export default Component;
