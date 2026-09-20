import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdeyaq8zm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdeyaq8zm"/>`,
		"fallback": "la:star-half",
	});
}

export default Component;
