import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-ughjblk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-ughjblk"/>`,
		"fallback": "at-icons:medal-3rd",
	});
}

export default Component;
