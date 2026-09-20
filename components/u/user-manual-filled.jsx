import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkibg5b6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qkibg5b6p"/>`,
		"fallback": "ix:user-manual-filled",
	});
}

export default Component;
