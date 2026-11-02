import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcss0flej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcss0flej"/>`,
		"fallback": "mingcute:palette-2-line",
	});
}

export default Component;
