import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1evspbtb.css';
import '../../css/t/t-62t6qqo.css';
import '../../css/n/nfogzobxu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1evspbtb"/><path class="t-62t6qqo"/><path class="nfogzobxu"/>`,
		"fallback": "streamline-pixel:shopping-shipping-products-gift",
	});
}

export default Component;
