import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhua32s8f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhua32s8f"/>`,
		"fallback": "ooui:move-first-ltr",
	});
}

export default Component;
