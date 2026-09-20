import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dljs7lzik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dljs7lzik"/>`,
		"fallback": "mdi:smart-card-reader-outline",
	});
}

export default Component;
