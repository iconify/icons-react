import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x85i4fyoz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x85i4fyoz"/>`,
		"fallback": "fa7-brands:megaport",
	});
}

export default Component;
