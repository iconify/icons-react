import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwwtl8bab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwwtl8bab"/>`,
		"fallback": "qlementine-icons:justify-left-16",
	});
}

export default Component;
