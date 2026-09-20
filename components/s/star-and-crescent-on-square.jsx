import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y39xv8bno.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y39xv8bno"/>`,
		"fallback": "pinhead:star-and-crescent-on-square",
	});
}

export default Component;
