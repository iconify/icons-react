import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwq6kdb5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwq6kdb5i"/>`,
		"fallback": "la:user-tag-solid",
	});
}

export default Component;
