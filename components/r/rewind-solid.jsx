import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slhz6db9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slhz6db9m"/>`,
		"fallback": "iconaut:rewind-solid",
	});
}

export default Component;
