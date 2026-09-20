import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yci86qb2h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yci86qb2h"/>`,
		"fallback": "la:pied-piper",
	});
}

export default Component;
