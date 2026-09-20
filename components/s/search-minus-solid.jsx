import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hawe5uj-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hawe5uj-h"/>`,
		"fallback": "mynaui:search-minus-solid",
	});
}

export default Component;
