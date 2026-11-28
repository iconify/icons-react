import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssfjm-b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssfjm-b9z"/>`,
		"fallback": "noviair-light:map-pin-info",
	});
}

export default Component;
