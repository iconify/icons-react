import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1wt32bfw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1wt32bfw"/>`,
		"fallback": "system-uicons:version",
	});
}

export default Component;
