import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctf8m1brb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctf8m1brb"/>`,
		"fallback": "codicon:magnet",
	});
}

export default Component;
