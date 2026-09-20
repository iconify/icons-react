import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt9qxsw3v.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG6rlJ3iKi" class="nt9qxsw3v"/></defs><use href="#SVG6rlJ3iKi" class="x4u8pbwjc"/><use href="#SVG6rlJ3iKi" class="jn8qy4bru"/>`,
		"fallback": "openmoji:open-hands",
	});
}

export default Component;
