import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw7e6_c3o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw7e6_c3o"/>`,
		"fallback": "pinhead:map-outline-with-swap-arrows",
	});
}

export default Component;
