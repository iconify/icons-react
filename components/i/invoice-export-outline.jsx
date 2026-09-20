import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szae48b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szae48b1t"/>`,
		"fallback": "mdi:invoice-export-outline",
	});
}

export default Component;
