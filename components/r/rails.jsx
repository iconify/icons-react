import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok4pix9fy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok4pix9fy"/>`,
		"fallback": "cib:rails",
	});
}

export default Component;
