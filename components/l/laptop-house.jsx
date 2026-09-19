import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxhhhlj3p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxhhhlj3p"/>`,
		"fallback": "fa7-solid:laptop-house",
	});
}

export default Component;
