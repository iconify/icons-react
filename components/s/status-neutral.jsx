import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9s-xjbik.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i9s-xjbik"/>`,
		"fallback": "pajamas:status-neutral",
	});
}

export default Component;
