import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7xoccxb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv7xoccxb"/>`,
		"fallback": "pinhead:triangles-left-right-in-wide-rounded-rectangle",
	});
}

export default Component;
