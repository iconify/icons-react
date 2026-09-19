import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifjow-b3h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifjow-b3h"/>`,
		"fallback": "fa7-brands:spotify",
	});
}

export default Component;
