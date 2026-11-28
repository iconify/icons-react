import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onhx01o1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onhx01o1b"/>`,
		"fallback": "iconaut:security-key-solid",
	});
}

export default Component;
