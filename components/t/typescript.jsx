import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv5b60b3j.css';
import '../../css/z/z8r7eipgi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv5b60b3j"/><path class="z8r7eipgi"/>`,
		"fallback": "thesvg-color:typescript",
	});
}

export default Component;
