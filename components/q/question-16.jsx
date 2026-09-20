import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1vphgcsy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1vphgcsy"/>`,
		"fallback": "octicon:question-16",
	});
}

export default Component;
