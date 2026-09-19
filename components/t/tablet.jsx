import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr7xv9bqt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr7xv9bqt"/>`,
		"fallback": "fa6-solid:tablet",
	});
}

export default Component;
