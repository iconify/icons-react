import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_5by1bgh.css';
import '../../css/h/hckr-tb6h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_5by1bgh"/><path class="hckr-tb6h"/>`,
		"fallback": "openmoji:pinterest",
	});
}

export default Component;
