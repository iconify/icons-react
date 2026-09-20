import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-3qr5bej.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-3qr5bej"/>`,
		"fallback": "map:shopping-mall",
	});
}

export default Component;
