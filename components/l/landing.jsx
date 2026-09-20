import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ul88bai.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ul88bai"/>`,
		"fallback": "picon:landing",
	});
}

export default Component;
