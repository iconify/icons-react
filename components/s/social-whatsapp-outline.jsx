import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9gk6b6yh.css';
import '../../css/v/vfp8vn0fx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9gk6b6yh"/><path class="vfp8vn0fx"/>`,
		"fallback": "ion:social-whatsapp-outline",
	});
}

export default Component;
