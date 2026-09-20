import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/buchvfs-i.css';
import '../../css/f/ftzpashah.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="buchvfs-i"/><path class="ftzpashah"/></g>`,
		"fallback": "streamline-color:mail-send-envelope-flat",
	});
}

export default Component;
