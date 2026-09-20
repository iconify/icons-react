import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzun363fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzun363fb"/>`,
		"fallback": "mdi:one-up",
	});
}

export default Component;
