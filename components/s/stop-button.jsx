import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-f53ebvb.css';
import '../../css/r/r8o5bwx5v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="z-f53ebvb"/><path class="r8o5bwx5v"/>`,
		"fallback": "openmoji:stop-button",
	});
}

export default Component;
