import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zmw1h8btz.css';
import '../../css/f/fci3usb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zmw1h8btz"/><path class="fci3usb-a"/></g>`,
		"fallback": "streamline-freehand:tags-double",
	});
}

export default Component;
