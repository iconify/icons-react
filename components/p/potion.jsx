import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjwzmm--m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjwzmm--m"/>`,
		"fallback": "at-icons:potion",
	});
}

export default Component;
