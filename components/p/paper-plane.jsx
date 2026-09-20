import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pngwd12fd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pngwd12fd"/>`,
		"fallback": "radix-icons:paper-plane",
	});
}

export default Component;
