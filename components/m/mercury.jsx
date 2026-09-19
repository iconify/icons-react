import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9wwaopot.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9wwaopot"/>`,
		"fallback": "fa7-solid:mercury",
	});
}

export default Component;
