import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpi-wl9og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpi-wl9og"/>`,
		"fallback": "bitcoin-icons:volume-mute-filled",
	});
}

export default Component;
