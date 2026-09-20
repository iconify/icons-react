import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbo7vsg8x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbo7vsg8x"/>`,
		"fallback": "raphael:iphone",
	});
}

export default Component;
