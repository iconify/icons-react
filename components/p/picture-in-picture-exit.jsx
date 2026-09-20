import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h3-ho3m_o.css';
import '../../css/z/zskkdpesn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h3-ho3m_o"/><path class="zskkdpesn"/></g>`,
		"fallback": "nrk:picture-in-picture-exit",
	});
}

export default Component;
