import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x27cxwf0d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x27cxwf0d"/>`,
		"fallback": "fa7-solid:puzzle-piece",
	});
}

export default Component;
