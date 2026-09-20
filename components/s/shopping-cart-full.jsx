import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nts_w_vxu.css';
import '../../css/u/uusgd4s3b.css';
import '../../css/p/p24y51b_i.css';
import '../../css/c/csc8yzb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nts_w_vxu"/><path class="uusgd4s3b"/><path class="p24y51b_i"/><path class="csc8yzb1b"/></g>`,
		"fallback": "streamline-ultimate:shopping-cart-full",
	});
}

export default Component;
