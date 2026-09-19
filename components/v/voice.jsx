import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4mfxfb6k.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4mfxfb6k"/>`,
		"fallback": "whh:voice",
	});
}

export default Component;
