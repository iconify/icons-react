import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1jo94x0n.css';
import '../../css/h/h1tlzyagf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1jo94x0n"/><path class="h1tlzyagf"/>`,
		"fallback": "ion:md-thumbs-down",
	});
}

export default Component;
