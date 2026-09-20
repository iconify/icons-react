import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odwxg8bki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odwxg8bki"/>`,
		"fallback": "vaadin:star-half-right-o",
	});
}

export default Component;
