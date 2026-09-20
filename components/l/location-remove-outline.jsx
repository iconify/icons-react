import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcw6cxbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcw6cxbco"/>`,
		"fallback": "mdi:location-remove-outline",
	});
}

export default Component;
