import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1k2lkb5q.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y1k2lkb5q"/>`,
		"fallback": "thesvg:rallly",
	});
}

export default Component;
