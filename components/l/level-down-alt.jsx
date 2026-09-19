import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq0ibpu3q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq0ibpu3q"/>`,
		"fallback": "fa7-solid:level-down-alt",
	});
}

export default Component;
