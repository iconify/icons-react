import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8s28ac3x.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8s28ac3x"/>`,
		"fallback": "fa-brands:ubuntu",
	});
}

export default Component;
