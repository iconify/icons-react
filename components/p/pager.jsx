import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1rw8bc3i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1rw8bc3i"/>`,
		"fallback": "fa7-solid:pager",
	});
}

export default Component;
