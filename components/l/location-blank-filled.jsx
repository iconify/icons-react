import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fix953b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fix953b6r"/>`,
		"fallback": "boxicons:location-blank-filled",
	});
}

export default Component;
