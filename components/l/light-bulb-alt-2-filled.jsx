import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-5eqqj4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-5eqqj4p"/>`,
		"fallback": "boxicons:light-bulb-alt-2-filled",
	});
}

export default Component;
