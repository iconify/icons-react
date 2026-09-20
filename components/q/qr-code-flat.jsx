import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ckjfefbrm.css';
import '../../css/v/vg-n6zcbu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ckjfefbrm"/><path class="vg-n6zcbu"/></g>`,
		"fallback": "streamline-color:qr-code-flat",
	});
}

export default Component;
