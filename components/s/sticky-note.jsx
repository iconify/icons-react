import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rymagyk2m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rymagyk2m"/>`,
		"fallback": "fa7-solid:sticky-note",
	});
}

export default Component;
