import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmw6wmnpz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmw6wmnpz"/>`,
		"fallback": "fa6-brands:jedi-order",
	});
}

export default Component;
