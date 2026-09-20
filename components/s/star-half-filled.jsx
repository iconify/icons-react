import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vks6qxb6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vks6qxb6e"/>`,
		"fallback": "ix:star-half-filled",
	});
}

export default Component;
