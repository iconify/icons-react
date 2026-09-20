import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-z2yuw-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-z2yuw-x"/>`,
		"fallback": "mdi:invoice-scheduled",
	});
}

export default Component;
