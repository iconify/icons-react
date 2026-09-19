import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi8nvx12u.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi8nvx12u"/>`,
		"fallback": "fa-brands:php",
	});
}

export default Component;
