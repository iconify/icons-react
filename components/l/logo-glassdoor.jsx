import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1rwnbp7q.css';
import '../../css/q/qru7a6bvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1rwnbp7q"/><path class="qru7a6bvm"/>`,
		"fallback": "carbon:logo-glassdoor",
	});
}

export default Component;
