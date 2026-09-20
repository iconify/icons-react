import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4shc1bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4shc1bpp"/>`,
		"fallback": "mingcute:palette-3-fill",
	});
}

export default Component;
