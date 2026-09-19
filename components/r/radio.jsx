import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufd3ayb6h.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufd3ayb6h"/>`,
		"fallback": "whh:radio",
	});
}

export default Component;
