import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjv4p1bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjv4p1bcu"/>`,
		"fallback": "noviair:mail-plus",
	});
}

export default Component;
