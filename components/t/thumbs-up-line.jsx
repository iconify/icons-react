import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7d9zgb6b.css';
import '../../css/z/zhxdoo0ch.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 x7d9zgb6b"/><path class="clr-i-outline clr-i-outline-path-2 zhxdoo0ch"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:thumbs-up-line",
	});
}

export default Component;
