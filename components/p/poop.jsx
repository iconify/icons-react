import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw-zgv1oh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw-zgv1oh"/>`,
		"fallback": "fa6-solid:poop",
	});
}

export default Component;
