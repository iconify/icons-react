import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8f9qnbrn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8f9qnbrn"/>`,
		"fallback": "octicon:repo-template-16",
	});
}

export default Component;
