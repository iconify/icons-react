import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn6x4mbfm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn6x4mbfm"/>`,
		"fallback": "bi:telephone-x-fill",
	});
}

export default Component;
