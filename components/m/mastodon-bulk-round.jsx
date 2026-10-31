import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zphk9zq7c.css';
import '../../css/i/i4yg80b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zphk9zq7c"/><path class="i4yg80b-e"/></g>`,
		"fallback": "coolicons:mastodon-bulk-round",
	});
}

export default Component;
