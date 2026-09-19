import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf67_cc1q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf67_cc1q"/>`,
		"fallback": "fa7-solid:users",
	});
}

export default Component;
