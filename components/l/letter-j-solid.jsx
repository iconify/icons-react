import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhh9iqynz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhh9iqynz"/>`,
		"fallback": "mynaui:letter-j-solid",
	});
}

export default Component;
