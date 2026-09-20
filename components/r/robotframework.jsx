import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd3rj95lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd3rj95lz"/>`,
		"fallback": "simple-icons:robotframework",
	});
}

export default Component;
