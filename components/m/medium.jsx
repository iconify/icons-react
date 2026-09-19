import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xusj4ss4w.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xusj4ss4w"/>`,
		"fallback": "fa6-brands:medium",
	});
}

export default Component;
