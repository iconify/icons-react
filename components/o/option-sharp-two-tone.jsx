import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy_b46cyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy_b46cyx"/>`,
		"fallback": "keyline-icons:option-sharp-two-tone",
	});
}

export default Component;
