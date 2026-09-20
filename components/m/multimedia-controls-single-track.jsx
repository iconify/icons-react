import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iq7v8c_9m.css';
import '../../css/l/lzh19ub0z.css';
import '../../css/y/yzgvnp0rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iq7v8c_9m"/><path class="lzh19ub0z"/><path class="yzgvnp0rw"/></g>`,
		"fallback": "streamline-freehand:multimedia-controls-single-track",
	});
}

export default Component;
