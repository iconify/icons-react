import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzej-u2_l.css';
import '../../css/k/kdt48wv0w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzej-u2_l"/><path class="kdt48wv0w"/></g>`,
		"fallback": "bi:motherboard-fill",
	});
}

export default Component;
