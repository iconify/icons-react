import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwo1-zbpy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwo1-zbpy"/>`,
		"fallback": "cryptocurrency:wax",
	});
}

export default Component;
