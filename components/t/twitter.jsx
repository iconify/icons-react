import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f687inzts.css';

const viewBox = {"width":768,"height":659};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f687inzts"/>`,
		"fallback": "ls:twitter",
	});
}

export default Component;
