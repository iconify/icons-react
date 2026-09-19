import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h93g3zbrf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h93g3zbrf"/>`,
		"fallback": "garden:notes-fill-12",
	});
}

export default Component;
