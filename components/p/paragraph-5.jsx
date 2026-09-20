import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wduv1absz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wduv1absz"/>`,
		"fallback": "subway:paragraph-5",
	});
}

export default Component;
