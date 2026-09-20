import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqd77bke.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgqd77bke"/>`,
		"fallback": "qlementine-icons:macaron-filled-16",
	});
}

export default Component;
