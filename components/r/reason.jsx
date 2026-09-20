import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe6x9xktv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe6x9xktv"/>`,
		"fallback": "thesvg-color:reason",
	});
}

export default Component;
