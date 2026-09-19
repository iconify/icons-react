import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk41io1ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mk41io1ew"/>`,
		"fallback": "flowbite:teddy-bear-solid",
	});
}

export default Component;
