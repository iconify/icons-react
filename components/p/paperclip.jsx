import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at0wybcon.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at0wybcon"/>`,
		"fallback": "openmoji:paperclip",
	});
}

export default Component;
