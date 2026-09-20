import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed_06dbbq.css';
import '../../css/w/wawtl9bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ed_06dbbq"/><path class="wawtl9bnb"/></g>`,
		"fallback": "lets-icons:on-button-duotone",
	});
}

export default Component;
