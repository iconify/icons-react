import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihb_q5xeh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihb_q5xeh"/>`,
		"fallback": "garden:share-stroke-16",
	});
}

export default Component;
