import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or20avb8e.css';
import '../../css/u/uotgxeb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or20avb8e"/><path class="uotgxeb7k"/>`,
		"fallback": "bx:upload",
	});
}

export default Component;
