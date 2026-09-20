import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk9qbrbug.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk9qbrbug"/>`,
		"fallback": "octicon:markdown-16",
	});
}

export default Component;
