import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akxs6rb3u.css';
import '../../css/e/e39n-3-ig.css';
import '../../css/k/kfo6mbbne.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="akxs6rb3u"/><path class="e39n-3-ig"/><path class="kfo6mbbne"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:syringe-circle",
	});
}

export default Component;
