import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvjqh6bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvjqh6bpa"/>`,
		"fallback": "uil:map-marker-minus",
	});
}

export default Component;
