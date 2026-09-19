import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2-xubciq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2-xubciq"/>`,
		"fallback": "fa6-brands:ns8",
	});
}

export default Component;
