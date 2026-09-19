import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwkxq6bpt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwkxq6bpt"/>`,
		"fallback": "fa-brands:kickstarter",
	});
}

export default Component;
