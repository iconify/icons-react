import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-0y2lb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-0y2lb-i"/>`,
		"fallback": "mdi:printer-favorite",
	});
}

export default Component;
