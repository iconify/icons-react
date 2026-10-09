import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctlj9gncl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctlj9gncl"/>`,
		"fallback": "energy-icons:strikethrough-20",
	});
}

export default Component;
