import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bab-dtb1f.css';
import '../../css/c/cak-oz7zh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bab-dtb1f"/><path class="cak-oz7zh"/></g>`,
		"fallback": "streamline-plump-color:pool-ladder-flat",
	});
}

export default Component;
