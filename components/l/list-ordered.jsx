import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9_1nzbyt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9_1nzbyt"/>`,
		"fallback": "at-icons:list-ordered",
	});
}

export default Component;
