import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mql1jc4bb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mql1jc4bb"/>`,
		"fallback": "fa-brands:unsplash",
	});
}

export default Component;
