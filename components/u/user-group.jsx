import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa44fkbyh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa44fkbyh"/>`,
		"fallback": "fa7-solid:user-group",
	});
}

export default Component;
