import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvu1ofbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvu1ofbri"/>`,
		"fallback": "solar:lock-password-unlocked-bold",
	});
}

export default Component;
