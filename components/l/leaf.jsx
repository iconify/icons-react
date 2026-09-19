import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6u46ccfd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6u46ccfd"/>`,
		"fallback": "at-icons:leaf",
	});
}

export default Component;
