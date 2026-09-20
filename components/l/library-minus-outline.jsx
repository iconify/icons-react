import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv1l5ez0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv1l5ez0f"/>`,
		"fallback": "mdi:library-minus-outline",
	});
}

export default Component;
