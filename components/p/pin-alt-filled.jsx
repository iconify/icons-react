import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyhexrb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyhexrb7h"/>`,
		"fallback": "boxicons:pin-alt-filled",
	});
}

export default Component;
