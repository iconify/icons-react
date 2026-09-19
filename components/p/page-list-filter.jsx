import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abx2ttvic.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abx2ttvic"/>`,
		"fallback": "fluent-mdl2:page-list-filter",
	});
}

export default Component;
