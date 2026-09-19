import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db18-0-vh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db18-0-vh"/>`,
		"fallback": "dinkie-icons:red-apple-small",
	});
}

export default Component;
