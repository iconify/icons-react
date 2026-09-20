import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/abfeulbnv.css';
import '../../css/r/rv8v62twe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="abfeulbnv"/><path clip-rule="evenodd" class="rv8v62twe"/></g>`,
		"fallback": "keyline-icons:shopping-basket-duotone",
	});
}

export default Component;
