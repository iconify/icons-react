import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icn6rqond.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icn6rqond"/>`,
		"fallback": "garden:upload-stroke-16",
	});
}

export default Component;
