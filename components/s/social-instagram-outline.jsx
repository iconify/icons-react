import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq15az8iw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq15az8iw"/>`,
		"fallback": "ion:social-instagram-outline",
	});
}

export default Component;
