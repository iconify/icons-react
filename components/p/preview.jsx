import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlmnb0b7u.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlmnb0b7u"/>`,
		"fallback": "whh:preview",
	});
}

export default Component;
