import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfmit8bob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pfmit8bob"/>`,
		"fallback": "streamline-block:shopping-help-information",
	});
}

export default Component;
