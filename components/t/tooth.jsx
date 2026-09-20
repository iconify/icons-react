import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6pyiyb5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6pyiyb5e"/>`,
		"fallback": "roentgen:tooth",
	});
}

export default Component;
