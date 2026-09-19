import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/src21_23v.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="src21_23v"/>`,
		"fallback": "fa6-solid:square-h",
	});
}

export default Component;
