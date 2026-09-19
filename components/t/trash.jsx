import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p92x1l1zg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p92x1l1zg"/>`,
		"fallback": "f7:trash",
	});
}

export default Component;
