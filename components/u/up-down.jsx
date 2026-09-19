import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqc_4lbyh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqc_4lbyh"/>`,
		"fallback": "fa7-solid:up-down",
	});
}

export default Component;
