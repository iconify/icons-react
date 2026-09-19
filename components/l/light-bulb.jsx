import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-ns-1bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-ns-1bzo"/>`,
		"fallback": "boxicons:light-bulb",
	});
}

export default Component;
