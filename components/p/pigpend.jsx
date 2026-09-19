import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej-1i0yet.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej-1i0yet"/>`,
		"fallback": "whh:pigpend",
	});
}

export default Component;
