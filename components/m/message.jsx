import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z--jb8bjc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z--jb8bjc"/>`,
		"fallback": "fa7-solid:message",
	});
}

export default Component;
