import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzswht5jn.css';
import '../../css/k/kpg-c7lss.css';
import '../../css/n/na7jemb_u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzswht5jn"/><path class="kpg-c7lss"/><path class="na7jemb_u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pine-decoration",
	});
}

export default Component;
