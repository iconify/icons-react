import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-g782bfv.css';
import '../../css/z/z8g5xoj5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-g782bfv"/><path class="z8g5xoj5w"/>`,
		"fallback": "famicons:mail-unread",
	});
}

export default Component;
