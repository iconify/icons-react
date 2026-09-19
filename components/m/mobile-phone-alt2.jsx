import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6p7f05an.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6p7f05an"/>`,
		"fallback": "dinkie-icons:mobile-phone-alt2",
	});
}

export default Component;
