import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6t-qx8yf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6t-qx8yf"/>`,
		"fallback": "pajamas:issue-new",
	});
}

export default Component;
