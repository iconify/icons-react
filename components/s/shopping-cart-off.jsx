import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8svwz5rs.css';
import '../../css/m/mcxf-ac_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p8svwz5rs"/><path class="mcxf-ac_l"/></g>`,
		"fallback": "tabler:shopping-cart-off",
	});
}

export default Component;
