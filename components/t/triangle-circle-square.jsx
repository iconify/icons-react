import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap76nacms.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap76nacms"/>`,
		"fallback": "fa7-solid:triangle-circle-square",
	});
}

export default Component;
