import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8k-86brg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8k-86brg"/>`,
		"fallback": "ix:map-alt-2-filled",
	});
}

export default Component;
