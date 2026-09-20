import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwh79xb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwh79xb6t"/>`,
		"fallback": "mdi:wall-sconce-round-variant-outline",
	});
}

export default Component;
