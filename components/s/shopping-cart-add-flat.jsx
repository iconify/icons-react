import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htvvvebia.css';
import '../../css/l/l3utkjbgv.css';
import '../../css/y/yfuy3-bir.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="htvvvebia"/><path class="l3utkjbgv"/><path clip-rule="evenodd" class="yfuy3-bir"/></g>`,
		"fallback": "streamline-plump-color:shopping-cart-add-flat",
	});
}

export default Component;
