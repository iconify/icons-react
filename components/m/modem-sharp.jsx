import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cecxa5ukj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cecxa5ukj"/>`,
		"fallback": "pixelarticons:modem-sharp",
	});
}

export default Component;
