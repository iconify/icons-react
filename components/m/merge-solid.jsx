import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr2x3naix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr2x3naix"/>`,
		"fallback": "iconaut:merge-solid",
	});
}

export default Component;
