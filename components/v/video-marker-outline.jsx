import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5kgi6kpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5kgi6kpw"/>`,
		"fallback": "mdi:video-marker-outline",
	});
}

export default Component;
