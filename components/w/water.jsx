import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uetbndbkk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uetbndbkk"/>`,
		"fallback": "fa7-solid:water",
	});
}

export default Component;
