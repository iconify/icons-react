import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyvh2j2cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyvh2j2cm"/>`,
		"fallback": "flowbite:open-door-outline",
	});
}

export default Component;
