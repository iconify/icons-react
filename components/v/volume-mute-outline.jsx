import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgltmzcuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgltmzcuw"/>`,
		"fallback": "bitcoin-icons:volume-mute-outline",
	});
}

export default Component;
