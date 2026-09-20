import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i8946bmpw.css';
import '../../css/w/wn5nyu97n.css';
import '../../css/k/k-vh-k0_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i8946bmpw"/><path class="wn5nyu97n"/><path class="k-vh-k0_p"/></g>`,
		"fallback": "streamline-freehand:network-router-signal-1",
	});
}

export default Component;
