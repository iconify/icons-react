import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5iqw1b3q.css';

const viewBox = {"width":667,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5iqw1b3q"/>`,
		"fallback": "ls:opera",
	});
}

export default Component;
