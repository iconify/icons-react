import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfv7x8bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfv7x8bsd"/>`,
		"fallback": "mdi:package-variant-minus",
	});
}

export default Component;
