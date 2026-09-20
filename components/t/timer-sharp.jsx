import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9d4z_blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9d4z_blx"/>`,
		"fallback": "keyline-icons:timer-sharp",
	});
}

export default Component;
