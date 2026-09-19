import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdocisc6q.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdocisc6q"/>`,
		"fallback": "fa6-solid:plane-lock",
	});
}

export default Component;
