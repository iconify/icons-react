import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1h-5kbhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1h-5kbhp"/>`,
		"fallback": "uiw:linkedin",
	});
}

export default Component;
