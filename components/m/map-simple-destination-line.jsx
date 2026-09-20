import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d51d4d4ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d51d4d4ea"/>`,
		"fallback": "majesticons:map-simple-destination-line",
	});
}

export default Component;
