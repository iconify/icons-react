import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upjutoumh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upjutoumh"/>`,
		"fallback": "game-icons:rough-wound",
	});
}

export default Component;
