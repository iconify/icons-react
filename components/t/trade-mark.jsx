import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu6bp5bnh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hu6bp5bnh"/>`,
		"fallback": "openmoji:trade-mark",
	});
}

export default Component;
