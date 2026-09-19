import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm48pi--i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm48pi--i"/>`,
		"fallback": "codicon:run-above",
	});
}

export default Component;
