import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwec1599h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwec1599h"/>`,
		"fallback": "ix:text-italic",
	});
}

export default Component;
