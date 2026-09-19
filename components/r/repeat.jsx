import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiu5-accd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiu5-accd"/>`,
		"fallback": "gg:repeat",
	});
}

export default Component;
