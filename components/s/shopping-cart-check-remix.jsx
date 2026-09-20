import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iypv80i3d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iypv80i3d"/>`,
		"fallback": "streamline:shopping-cart-check-remix",
	});
}

export default Component;
