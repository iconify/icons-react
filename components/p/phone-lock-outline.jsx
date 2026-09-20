import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly74v2r8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly74v2r8j"/>`,
		"fallback": "mdi:phone-lock-outline",
	});
}

export default Component;
