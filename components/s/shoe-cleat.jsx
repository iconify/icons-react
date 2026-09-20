import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aija5746l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aija5746l"/>`,
		"fallback": "mdi:shoe-cleat",
	});
}

export default Component;
