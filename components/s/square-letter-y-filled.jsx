import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcm4wp_7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcm4wp_7m"/>`,
		"fallback": "tabler:square-letter-y-filled",
	});
}

export default Component;
