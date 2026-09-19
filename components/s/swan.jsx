import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crqaz6bbu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crqaz6bbu"/>`,
		"fallback": "dinkie-icons:swan",
	});
}

export default Component;
