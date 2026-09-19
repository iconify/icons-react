import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz9rk9b4y.css';

const viewBox = {"width":481,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz9rk9b4y"/>`,
		"fallback": "file-icons:openexr",
	});
}

export default Component;
