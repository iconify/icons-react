import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoq3slb8f.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoq3slb8f"/>`,
		"fallback": "wi:moon-9",
	});
}

export default Component;
