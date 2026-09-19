import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0k2tubij.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0k2tubij"/>`,
		"fallback": "codicon:link",
	});
}

export default Component;
