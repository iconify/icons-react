import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1j10lb6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1j10lb6h"/>`,
		"fallback": "file-icons:jsx",
	});
}

export default Component;
