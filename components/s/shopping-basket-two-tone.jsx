import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tbtgopb-x.css';
import '../../css/v/vpco04b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tbtgopb-x"/><path class="vpco04b2k"/></g>`,
		"fallback": "keyline-icons:shopping-basket-two-tone",
	});
}

export default Component;
