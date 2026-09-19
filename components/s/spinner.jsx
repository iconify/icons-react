import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt7epe3bo.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt7epe3bo"/>`,
		"fallback": "fontisto:spinner",
	});
}

export default Component;
