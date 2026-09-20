import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/o/o5oynubfz.css';
import '../../css/j/jpc1z5guw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="o5oynubfz"/><path class="jpc1z5guw"/></g>`,
		"fallback": "skill-icons:java-light",
	});
}

export default Component;
