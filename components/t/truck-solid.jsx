import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogg2qpwxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogg2qpwxx"/>`,
		"fallback": "iconaut:truck-solid",
	});
}

export default Component;
