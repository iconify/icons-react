import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5d58pb-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5d58pb-c"/>`,
		"fallback": "codicon:person-voice",
	});
}

export default Component;
