import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dl3v1k17t.css';
import '../../css/e/edkgiwyzq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dl3v1k17t"/><path class="edkgiwyzq"/></g>`,
		"fallback": "rivet-icons:link-external",
	});
}

export default Component;
