import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4wg1xl2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4wg1xl2a"/>`,
		"fallback": "pixelarticons:laptop-sharp",
	});
}

export default Component;
