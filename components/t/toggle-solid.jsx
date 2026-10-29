import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzwt5ab0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzwt5ab0v"/>`,
		"fallback": "withicons:toggle-solid",
	});
}

export default Component;
