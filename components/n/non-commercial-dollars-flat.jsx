import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xy96ldbin.css';
import '../../css/p/pji9d1uch.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xy96ldbin"/><path class="pji9d1uch"/></g>`,
		"fallback": "streamline-flex-color:non-commercial-dollars-flat",
	});
}

export default Component;
