import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqm18kb_w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqm18kb_w"/>`,
		"fallback": "fa7-solid:ring",
	});
}

export default Component;
