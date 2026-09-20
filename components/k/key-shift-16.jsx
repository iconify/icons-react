import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqeo4nzcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uqeo4nzcu"/>`,
		"fallback": "qlementine-icons:key-shift-16",
	});
}

export default Component;
