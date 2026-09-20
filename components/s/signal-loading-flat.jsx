import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k0-r_5ben.css';
import '../../css/n/nw1149l1i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k0-r_5ben"/><path class="nw1149l1i"/></g>`,
		"fallback": "streamline-color:signal-loading-flat",
	});
}

export default Component;
