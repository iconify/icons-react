import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/firpjtj6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="firpjtj6i"/>`,
		"fallback": "garden:interlocking-rings-fill-16",
	});
}

export default Component;
