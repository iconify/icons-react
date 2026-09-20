import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vvk691bnz.css';
import '../../css/h/hcjuv6byd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vvk691bnz"/><path class="hcjuv6byd"/></g>`,
		"fallback": "streamline-flex-color:page-setting-flat",
	});
}

export default Component;
