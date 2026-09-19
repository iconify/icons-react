import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbfi2qb8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbfi2qb8m"/>`,
		"fallback": "carbon:right-panel-open-filled",
	});
}

export default Component;
