import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwo1j0b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwo1j0b4b"/>`,
		"fallback": "mdi:stairs-box",
	});
}

export default Component;
