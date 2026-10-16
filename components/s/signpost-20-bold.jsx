import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a60pyzb1b.css';
import '../../css/e/ejvwyfy7d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a60pyzb1b"/><path class="ejvwyfy7d"/>`,
		"fallback": "energy-icons:signpost-20-bold",
	});
}

export default Component;
