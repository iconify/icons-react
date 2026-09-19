import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbw7f2xxz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbw7f2xxz"/>`,
		"fallback": "fa7-solid:sack-dollar",
	});
}

export default Component;
