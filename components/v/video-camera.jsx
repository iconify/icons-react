import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/ad3inpbmk.css';
import '../../css/u/u3t_70zmq.css';
import '../../css/j/ji__inbda.css';
import '../../css/o/ow1y8dbgh.css';
import '../../css/p/p8i967bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ad3inpbmk wm-shadow"/><path class="u3t_70zmq wm-shadow"/><path class="ji__inbda"/><path class="ow1y8dbgh"/><path class="p8i967bcu"/></g>`,
		"fallback": "withicons-brutal:video-camera",
	});
}

export default Component;
