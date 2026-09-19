import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4fsw9bdc.css';
import '../../css/h/h0tpptbts.css';
import '../../css/z/z668_ubuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4fsw9bdc"/><path class="h0tpptbts"/><path class="z668_ubuw"/></g>`,
		"fallback": "hugeicons:soft-drink-02",
	});
}

export default Component;
