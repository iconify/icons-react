import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnw7i4b4q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnw7i4b4q"/>`,
		"fallback": "vaadin:paste",
	});
}

export default Component;
