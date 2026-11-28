import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cio6d1bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cio6d1bdu"/>`,
		"fallback": "iconaut:motorcycle-solid",
	});
}

export default Component;
