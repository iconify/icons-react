import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epjxbj1wt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epjxbj1wt"/>`,
		"fallback": "dinkie-icons:keycap-shift-small-filled",
	});
}

export default Component;
