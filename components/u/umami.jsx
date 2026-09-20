import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w45-95bra.css';
import '../../css/s/s6vetcb2r.css';
import '../../css/s/sd2ql6hrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w45-95bra"/><path clip-rule="evenodd" class="s6vetcb2r"/><path class="sd2ql6hrn"/>`,
		"fallback": "token:umami",
	});
}

export default Component;
