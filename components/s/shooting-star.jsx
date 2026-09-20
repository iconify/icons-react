import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rawbtr-6p.css';
import '../../css/p/p28r9n0-i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rawbtr-6p"/><path class="p28r9n0-i"/>`,
		"fallback": "openmoji:shooting-star",
	});
}

export default Component;
