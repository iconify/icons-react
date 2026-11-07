import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyc7oevht.css';
import '../../css/g/g-rrphyqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyc7oevht"/><path clip-rule="evenodd" class="g-rrphyqz"/>`,
		"fallback": "solar:wallet-outline",
	});
}

export default Component;
