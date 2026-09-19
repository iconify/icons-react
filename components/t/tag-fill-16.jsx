import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iminszb2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iminszb2z"/>`,
		"fallback": "garden:tag-fill-16",
	});
}

export default Component;
