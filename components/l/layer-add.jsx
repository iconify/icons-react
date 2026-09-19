import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mlyjx9xfn.css';
import '../../css/n/nj96_stqd.css';
import '../../css/s/swblvjb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mlyjx9xfn"/><path class="nj96_stqd"/><path class="swblvjb1b"/></g>`,
		"fallback": "hugeicons:layer-add",
	});
}

export default Component;
