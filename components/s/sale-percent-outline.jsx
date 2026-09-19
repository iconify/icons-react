import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qihv1wb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qihv1wb4o"/>`,
		"fallback": "flowbite:sale-percent-outline",
	});
}

export default Component;
