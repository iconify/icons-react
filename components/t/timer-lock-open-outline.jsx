import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2edd6b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2edd6b2s"/>`,
		"fallback": "mdi:timer-lock-open-outline",
	});
}

export default Component;
