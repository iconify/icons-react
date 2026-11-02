import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unqyvfb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unqyvfb_d"/>`,
		"fallback": "mingcute:test-tube-line",
	});
}

export default Component;
