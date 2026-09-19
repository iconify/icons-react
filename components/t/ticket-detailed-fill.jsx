import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffj7q5byu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffj7q5byu"/>`,
		"fallback": "bi:ticket-detailed-fill",
	});
}

export default Component;
