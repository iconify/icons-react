import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zmq-0k3gw.css';
import '../../css/a/a2w5to52d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zmq-0k3gw"/><path class="a2w5to52d"/></g>`,
		"fallback": "solar:quote-bold",
	});
}

export default Component;
