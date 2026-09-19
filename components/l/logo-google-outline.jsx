import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgj4t2bgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgj4t2bgy"/>`,
		"fallback": "ion:logo-google-outline",
	});
}

export default Component;
