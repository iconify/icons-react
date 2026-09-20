import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iquifubcu.css';
import '../../css/z/zm35_kbpi.css';
import '../../css/a/a75755bbg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iquifubcu"/><path class="zm35_kbpi"/><path class="a75755bbg"/>`,
		"fallback": "streamline-pixel:shopping-shipping-delivery-person-motorcycle",
	});
}

export default Component;
