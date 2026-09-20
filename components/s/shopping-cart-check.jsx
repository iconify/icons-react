import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syl3tvbdl.css';
import '../../css/z/zv8_vrbvb.css';
import '../../css/w/wbvtzgrah.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="syl3tvbdl"/><path class="zv8_vrbvb"/><path class="wbvtzgrah"/></g>`,
		"fallback": "streamline-color:shopping-cart-check",
	});
}

export default Component;
