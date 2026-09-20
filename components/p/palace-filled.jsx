import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5tnvjb5t.css';
import '../../css/t/t-cj0obgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5tnvjb5t"/><path class="t-cj0obgd"/>`,
		"fallback": "tdesign:palace-filled",
	});
}

export default Component;
