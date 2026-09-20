import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5q7mwbon.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k5q7mwbon"/>`,
		"fallback": "lsicon:question-filled",
	});
}

export default Component;
