import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr4px3b0h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr4px3b0h"/>`,
		"fallback": "fa7-solid:spaghetti-monster-flying",
	});
}

export default Component;
