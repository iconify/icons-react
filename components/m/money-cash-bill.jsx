import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6vqvxbgz.css';
import '../../css/x/xgh5sp86e.css';
import '../../css/u/uuq0qhh6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q6vqvxbgz"/><path class="xgh5sp86e"/><path class="uuq0qhh6a"/></g>`,
		"fallback": "streamline-freehand:money-cash-bill",
	});
}

export default Component;
