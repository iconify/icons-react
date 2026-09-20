import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3mu86_sr.css';
import '../../css/c/c1t0jxbrv.css';
import '../../css/p/prste7bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h3mu86_sr"/><path class="c1t0jxbrv"/><path class="prste7bpn"/></g>`,
		"fallback": "streamline-freehand:stamps-portrait",
	});
}

export default Component;
