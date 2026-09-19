import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkaqti56k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkaqti56k"/>`,
		"fallback": "carbon:page-last",
	});
}

export default Component;
