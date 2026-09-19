import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvem3hemn.css';

const viewBox = {"width":640,"height":662};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvem3hemn"/>`,
		"fallback": "ls:spa",
	});
}

export default Component;
