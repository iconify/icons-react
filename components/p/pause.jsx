import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjxk9mb5b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjxk9mb5b"/>`,
		"fallback": "fa7-solid:pause",
	});
}

export default Component;
