import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb25rsc5r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb25rsc5r"/>`,
		"fallback": "simple-line-icons:settings",
	});
}

export default Component;
