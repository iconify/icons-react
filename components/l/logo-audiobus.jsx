import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg08evbls.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg08evbls"/>`,
		"fallback": "fad:logo-audiobus",
	});
}

export default Component;
