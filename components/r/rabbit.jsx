import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f864tob5j.css';

const viewBox = {"width":959,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f864tob5j"/>`,
		"fallback": "whh:rabbit",
	});
}

export default Component;
