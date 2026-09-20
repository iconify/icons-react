import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne2sisi1r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne2sisi1r"/>`,
		"fallback": "radix-icons:reset",
	});
}

export default Component;
