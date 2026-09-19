import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uucrl1b5x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uucrl1b5x"/>`,
		"fallback": "fa7-solid:minimize",
	});
}

export default Component;
