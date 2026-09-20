import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjnoqlmbw.css';
import '../../css/m/mw0oakbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjnoqlmbw"/><path class="mw0oakbnz"/>`,
		"fallback": "streamline-freehand:shopping-cart-trolley-full",
	});
}

export default Component;
