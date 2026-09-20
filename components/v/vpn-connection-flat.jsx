import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zesqyibdl.css';
import '../../css/y/yhl1c6byo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zesqyibdl"/><path class="yhl1c6byo"/></g>`,
		"fallback": "streamline-flex-color:vpn-connection-flat",
	});
}

export default Component;
