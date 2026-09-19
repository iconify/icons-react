import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znntknz_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znntknz_y"/>`,
		"fallback": "ion:logo-html5-outline",
	});
}

export default Component;
