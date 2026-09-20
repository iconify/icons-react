import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np7lh-0vp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="np7lh-0vp"/>`,
		"fallback": "streamline:line-arrow-curve-right-down-remix",
	});
}

export default Component;
