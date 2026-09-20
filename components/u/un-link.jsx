import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5t9vt_or.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5t9vt_or"/>`,
		"fallback": "ooui:un-link",
	});
}

export default Component;
