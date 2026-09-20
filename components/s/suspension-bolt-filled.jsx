import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz9xr_b8e.css';
import '../../css/k/kn9hn5b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uz9xr_b8e"/><path clip-rule="evenodd" class="kn9hn5b8r"/></g>`,
		"fallback": "reicon:suspension-bolt-filled",
	});
}

export default Component;
