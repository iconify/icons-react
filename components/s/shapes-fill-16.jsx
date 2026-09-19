import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8gxk74en.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8gxk74en"/>`,
		"fallback": "garden:shapes-fill-16",
	});
}

export default Component;
