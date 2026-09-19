import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujrvc6l4r.css';
import '../../css/b/b3hvwyb-p.css';
import '../../css/k/klfz4qg8n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujrvc6l4r"/><path class="b3hvwyb-p"/><path class="klfz4qg8n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pilot",
	});
}

export default Component;
