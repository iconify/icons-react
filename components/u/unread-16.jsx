import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubzx9fbaa.css';
import '../../css/d/dlqc4jbur.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubzx9fbaa"/><path class="dlqc4jbur"/>`,
		"fallback": "octicon:unread-16",
	});
}

export default Component;
