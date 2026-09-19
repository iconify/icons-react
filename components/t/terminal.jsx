import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_0ix7bza.css';
import '../../css/y/yt0ww0arr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_0ix7bza"/><path class="yt0ww0arr"/>`,
		"fallback": "carbon:terminal",
	});
}

export default Component;
