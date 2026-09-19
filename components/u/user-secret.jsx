import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs9-6d97q.css';

const viewBox = {"width":1408,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs9-6d97q"/>`,
		"fallback": "fa:user-secret",
	});
}

export default Component;
