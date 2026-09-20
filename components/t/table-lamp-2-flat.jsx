import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wl4h42fwf.css';
import '../../css/n/nol6hlb0w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wl4h42fwf"/><path class="nol6hlb0w"/></g>`,
		"fallback": "streamline-flex-color:table-lamp-2-flat",
	});
}

export default Component;
