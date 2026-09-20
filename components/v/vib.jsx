import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrwqhqsxr.css';
import '../../css/u/ur_-j1b1o.css';

const viewBox = {"width":1397,"height":632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrwqhqsxr"/><path class="ur_-j1b1o"/>`,
		"fallback": "thesvg:vib",
	});
}

export default Component;
