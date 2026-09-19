import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd9or_bxr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd9or_bxr"/>`,
		"fallback": "fa7-brands:matrix",
	});
}

export default Component;
