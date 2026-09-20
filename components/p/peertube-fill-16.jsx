import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbhtql8cp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbhtql8cp"/>`,
		"fallback": "qlementine-icons:peertube-fill-16",
	});
}

export default Component;
