import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7l5kub7j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7l5kub7j"/>`,
		"fallback": "quill:mail-unsub",
	});
}

export default Component;
