import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybm7tbcok.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybm7tbcok"/>`,
		"fallback": "fa7-brands:venmo",
	});
}

export default Component;
