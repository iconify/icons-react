import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp61wiopl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp61wiopl"/>`,
		"fallback": "dinkie-icons:six-of-circles-mahjong",
	});
}

export default Component;
