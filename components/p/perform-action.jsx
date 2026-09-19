import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhdj6ccwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhdj6ccwb"/>`,
		"fallback": "carbon:perform-action",
	});
}

export default Component;
