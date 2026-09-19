import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-j3llfvp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-j3llfvp"/>`,
		"fallback": "fa7-solid:long-arrow-up",
	});
}

export default Component;
