import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ibn5-ar.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0ibn5-ar"/>`,
		"fallback": "fa7-solid:user-tag",
	});
}

export default Component;
