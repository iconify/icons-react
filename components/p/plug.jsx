import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9j9rvb1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9j9rvb1g"/>`,
		"fallback": "codicon:plug",
	});
}

export default Component;
