import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5adilbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5adilbpc"/>`,
		"fallback": "mingcute:location-3-line",
	});
}

export default Component;
