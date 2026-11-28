import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3mzitb5s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3mzitb5s"/>`,
		"fallback": "pullo:postage-stamp-thin",
	});
}

export default Component;
