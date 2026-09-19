import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_j186bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_j186bci"/>`,
		"fallback": "guidance:money",
	});
}

export default Component;
