import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e02a5kbah.css';
import '../../css/n/n5nnvotfx.css';

const viewBox = {"width":256,"height":252};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e02a5kbah"/><path class="n5nnvotfx"/>`,
		"fallback": "thesvg-color:mysql-light",
	});
}

export default Component;
