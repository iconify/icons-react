import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1u8gz3hx.css';
import '../../css/g/gdktam-6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1u8gz3hx"/><rect class="gdktam-6m"/>`,
		"fallback": "famicons:tv-sharp",
	});
}

export default Component;
