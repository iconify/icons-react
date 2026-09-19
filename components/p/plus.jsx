import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cap52ybmq.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cap52ybmq"/>`,
		"fallback": "fa:plus",
	});
}

export default Component;
