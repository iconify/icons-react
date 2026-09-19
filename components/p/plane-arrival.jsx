import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw8fa3b5h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw8fa3b5h"/>`,
		"fallback": "fa7-solid:plane-arrival",
	});
}

export default Component;
