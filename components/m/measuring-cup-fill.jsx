import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0f9isvkl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0f9isvkl"/>`,
		"fallback": "bi:measuring-cup-fill",
	});
}

export default Component;
