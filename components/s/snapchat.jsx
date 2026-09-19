import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0bsct1rm.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0bsct1rm"/>`,
		"fallback": "fa-brands:snapchat",
	});
}

export default Component;
