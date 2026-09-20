import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uz0tpoxrm.css';
import '../../css/x/xic5p8biq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uz0tpoxrm"/><path class="xic5p8biq"/></g>`,
		"fallback": "streamline-color:scanner-3-flat",
	});
}

export default Component;
