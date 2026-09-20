import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eyi56wbdv.css';
import '../../css/k/k4zcok6kq.css';
import '../../css/w/w-c8p7hya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eyi56wbdv"/><path class="k4zcok6kq"/><path class="w-c8p7hya"/></g>`,
		"fallback": "streamline-ultimate:startup-product-rocket-box",
	});
}

export default Component;
