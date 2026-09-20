import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5j9-8b3r.css';
import '../../css/w/w0npftb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5j9-8b3r"/><path clip-rule="evenodd" class="w0npftb6w"/></g>`,
		"fallback": "nrk:lock",
	});
}

export default Component;
