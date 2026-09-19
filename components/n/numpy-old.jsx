import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9-i1hbgb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9-i1hbgb"/>`,
		"fallback": "file-icons:numpy-old",
	});
}

export default Component;
