import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvzn9ypis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvzn9ypis"/>`,
		"fallback": "vaadin:magnet",
	});
}

export default Component;
