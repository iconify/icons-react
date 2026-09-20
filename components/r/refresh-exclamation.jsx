import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wobbg0a8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wobbg0a8k"/>`,
		"fallback": "ix:refresh-exclamation",
	});
}

export default Component;
