import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq77w7b6q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq77w7b6q"/>`,
		"fallback": "lineicons:thumbs-down",
	});
}

export default Component;
