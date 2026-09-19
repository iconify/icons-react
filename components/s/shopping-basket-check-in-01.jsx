import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0gob0b_z.css';
import '../../css/w/wis2p7bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n0gob0b_z"/><path class="wis2p7bds"/></g>`,
		"fallback": "hugeicons:shopping-basket-check-in-01",
	});
}

export default Component;
