import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o2s4c3jnm.css';
import '../../css/s/sbcuk3qdu.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o2s4c3jnm"/><path class="sbcuk3qdu"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "hugeicons:rub-el-hizb",
	});
}

export default Component;
