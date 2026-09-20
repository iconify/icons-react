import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1nv75n_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1nv75n_k"/>`,
		"fallback": "ooui:merge-rtl",
	});
}

export default Component;
