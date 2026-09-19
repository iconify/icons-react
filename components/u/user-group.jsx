import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqfvm8biv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqfvm8biv"/>`,
		"fallback": "fa6-solid:user-group",
	});
}

export default Component;
