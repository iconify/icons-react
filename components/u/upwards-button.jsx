import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doj8pis9b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doj8pis9b"/>`,
		"fallback": "openmoji:upwards-button",
	});
}

export default Component;
