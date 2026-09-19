import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea-zh2v5h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea-zh2v5h"/>`,
		"fallback": "file-icons:picolisp",
	});
}

export default Component;
