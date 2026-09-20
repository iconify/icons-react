import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a89o3fw4o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a89o3fw4o"/>`,
		"fallback": "la:js-square",
	});
}

export default Component;
