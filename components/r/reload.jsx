import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8xm3vb2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8xm3vb2e"/>`,
		"fallback": "bytesize:reload",
	});
}

export default Component;
