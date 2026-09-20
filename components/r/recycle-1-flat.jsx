import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga-o0vbwz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ga-o0vbwz"/>`,
		"fallback": "streamline-flex-color:recycle-1-flat",
	});
}

export default Component;
