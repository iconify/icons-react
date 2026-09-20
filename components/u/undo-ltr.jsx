import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9pgkkb6h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9pgkkb6h"/>`,
		"fallback": "ooui:undo-ltr",
	});
}

export default Component;
