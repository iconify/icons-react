import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flzduy9-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flzduy9-l"/>`,
		"fallback": "mdi:ring",
	});
}

export default Component;
