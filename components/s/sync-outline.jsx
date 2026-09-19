import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wic4l3bna.css';
import '../../css/j/j2rwd5epq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wic4l3bna"/><path class="j2rwd5epq"/>`,
		"fallback": "famicons:sync-outline",
	});
}

export default Component;
