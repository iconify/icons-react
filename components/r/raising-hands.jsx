import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ttspegr.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8ttspegr"/><path class="v2yh4c2xt"/>`,
		"fallback": "openmoji:raising-hands",
	});
}

export default Component;
