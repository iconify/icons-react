import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnre6hb8z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnre6hb8z"/>`,
		"fallback": "at-icons:person-run",
	});
}

export default Component;
