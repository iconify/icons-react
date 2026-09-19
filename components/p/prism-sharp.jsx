import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woxu74yrt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woxu74yrt"/>`,
		"fallback": "famicons:prism-sharp",
	});
}

export default Component;
