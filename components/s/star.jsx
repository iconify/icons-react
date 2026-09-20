import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee1e7zbqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee1e7zbqj"/>`,
		"fallback": "raphael:star",
	});
}

export default Component;
