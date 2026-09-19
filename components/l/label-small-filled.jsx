import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7tz73t3q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7tz73t3q"/>`,
		"fallback": "dinkie-icons:label-small-filled",
	});
}

export default Component;
