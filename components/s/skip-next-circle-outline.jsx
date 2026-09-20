import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/calg-m4sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="calg-m4sr"/>`,
		"fallback": "mdi:skip-next-circle-outline",
	});
}

export default Component;
