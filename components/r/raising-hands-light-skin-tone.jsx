import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9wzftb8q.css';
import '../../css/i/ij1c8acsy.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9wzftb8q"/><path class="ij1c8acsy"/><path class="v2yh4c2xt"/>`,
		"fallback": "openmoji:raising-hands-light-skin-tone",
	});
}

export default Component;
