import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlxv6j38h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlxv6j38h"/>`,
		"fallback": "qlementine-icons:save-12",
	});
}

export default Component;
