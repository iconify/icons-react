import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m25gnw5fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m25gnw5fq"/>`,
		"fallback": "flowbite:mail-box-outline",
	});
}

export default Component;
