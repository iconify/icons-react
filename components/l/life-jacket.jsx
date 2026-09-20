import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkzkov_zo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkzkov_zo"/>`,
		"fallback": "pinhead:life-jacket",
	});
}

export default Component;
