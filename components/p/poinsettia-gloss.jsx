import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tzk719bov.css';
import '../../css/b/b_5s04lfu.css';
import '../../css/s/smz1kc4xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tzk719bov wm-k"/><path class="b_5s04lfu wm-k"/><path class="smz1kc4xq wm-s"/></g>`,
		"fallback": "withicons:poinsettia-gloss",
	});
}

export default Component;
