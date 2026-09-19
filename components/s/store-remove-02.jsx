import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sid0l0b_w.css';
import '../../css/t/tks4f498j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sid0l0b_w"/><path class="tks4f498j"/></g>`,
		"fallback": "hugeicons:store-remove-02",
	});
}

export default Component;
