import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut2dsb9ql.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut2dsb9ql"/>`,
		"fallback": "fa7-solid:tram",
	});
}

export default Component;
