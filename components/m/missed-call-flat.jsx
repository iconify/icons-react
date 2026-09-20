import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g8gpfchrn.css';
import '../../css/p/p0x_p28cx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g8gpfchrn"/><path class="p0x_p28cx"/></g>`,
		"fallback": "streamline-color:missed-call-flat",
	});
}

export default Component;
