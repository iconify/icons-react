import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl6y03tsx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl6y03tsx"/>`,
		"fallback": "fa-brands:tumblr-square",
	});
}

export default Component;
