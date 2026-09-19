import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9r0b5yyt.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9r0b5yyt"/>`,
		"fallback": "whh:phppear",
	});
}

export default Component;
