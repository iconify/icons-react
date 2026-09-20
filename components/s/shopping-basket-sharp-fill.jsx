import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b56cl7uxt.css';
import '../../css/v/v-qjy5b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b56cl7uxt"/><path clip-rule="evenodd" class="v-qjy5b7r"/></g>`,
		"fallback": "keyline-icons:shopping-basket-sharp-fill",
	});
}

export default Component;
