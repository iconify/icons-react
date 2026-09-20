import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zebs4qb6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zebs4qb6e"/>`,
		"fallback": "qlementine-icons:layers-1-16",
	});
}

export default Component;
