import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra8bklu7u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra8bklu7u"/>`,
		"fallback": "fa7-regular:note-sticky",
	});
}

export default Component;
