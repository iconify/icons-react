import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abppvacyo.css';
import '../../css/y/yv427ebbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abppvacyo"/><path clip-rule="evenodd" class="yv427ebbj"/>`,
		"fallback": "qlementine-icons:view-page-single-16",
	});
}

export default Component;
