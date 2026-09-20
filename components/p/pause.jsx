import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1_5a4buf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1_5a4buf"/>`,
		"fallback": "uiw:pause",
	});
}

export default Component;
