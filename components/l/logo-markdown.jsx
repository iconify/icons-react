import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp2hn9c7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp2hn9c7m"/>`,
		"fallback": "ion:logo-markdown",
	});
}

export default Component;
