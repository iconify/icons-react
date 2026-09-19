import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axmrgv7yn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axmrgv7yn"/>`,
		"fallback": "fa7-solid:network-wired",
	});
}

export default Component;
