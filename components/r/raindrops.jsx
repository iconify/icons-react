import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0a8dc52p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0a8dc52p"/>`,
		"fallback": "uil:raindrops",
	});
}

export default Component;
