import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1rz5ob3q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1rz5ob3q"/>`,
		"fallback": "maki:paint",
	});
}

export default Component;
