import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqqsoly8x.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqqsoly8x"/>`,
		"fallback": "fa-brands:mendeley",
	});
}

export default Component;
