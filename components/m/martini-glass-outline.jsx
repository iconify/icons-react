import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc471db1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc471db1u"/>`,
		"fallback": "flowbite:martini-glass-outline",
	});
}

export default Component;
