import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo3soyo3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo3soyo3f"/>`,
		"fallback": "garden:user-follow-stroke-16",
	});
}

export default Component;
