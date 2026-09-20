import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cu4i2abzv.css';
import '../../css/w/w99xa2_7n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cu4i2abzv"/><path class="w99xa2_7n"/></g>`,
		"fallback": "streamline-flex-color:pin-1-flat",
	});
}

export default Component;
