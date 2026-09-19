import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao-gebb7i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao-gebb7i"/>`,
		"fallback": "dinkie-icons:pistol",
	});
}

export default Component;
