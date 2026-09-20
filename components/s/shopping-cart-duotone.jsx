import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfrzfmbbd.css';
import '../../css/u/uhk7vm7zq.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cfrzfmbbd"/><path class="uhk7vm7zq"/><path class="czbbm17fv"/></g>`,
		"fallback": "keyline-icons:shopping-cart-duotone",
	});
}

export default Component;
