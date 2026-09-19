import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/howt5s-nm.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="howt5s-nm"/>`,
		"fallback": "topcoat:text",
	});
}

export default Component;
