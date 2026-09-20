import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7nn73bmg.css';
import '../../css/u/ukh6i7bhi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7nn73bmg"/><path class="ukh6i7bhi"/>`,
		"fallback": "thesvg-color:jaco-dark",
	});
}

export default Component;
