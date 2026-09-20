import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny4u_8yny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny4u_8yny"/>`,
		"fallback": "tabler:tools-kitchen-2-off",
	});
}

export default Component;
