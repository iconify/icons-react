import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzvwx7now.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzvwx7now"/>`,
		"fallback": "fa-brands:kickstarter-k",
	});
}

export default Component;
