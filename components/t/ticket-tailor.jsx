import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s75etwb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s75etwb0a"/>`,
		"fallback": "thesvg-color:ticket-tailor",
	});
}

export default Component;
